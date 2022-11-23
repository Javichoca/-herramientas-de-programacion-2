using api_autores.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_autores.Controllers
{
    [ApiController]
    [Route("api-autores/libro")]
    public class LibroController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public LibroController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Libro>>> findAll()
        {
            return await context.Libro.Include(x => x.autor).ToListAsync();
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<Libro>>> findAllCustom()
        {
            return await context.Libro.Include(x => x.autor).
                Where(x => x.estado == true).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> add(Libro l)
        {
            //verificando la existencia del autor
            var autorexiste = await context.Autor
                .AnyAsync(x => x.codigoautor == l.codigoautor);

            if (!autorexiste)
            {
                return BadRequest($"No existe el autor con codigo: {l.codigoautor}");
            }
            context.Add(l);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Libro>> findById(int id)
        {
            var libro = await context.Libro
                .FirstOrDefaultAsync(x => x.codigolibro == id);
            return libro;

        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Libro l, int id)
        {
            if (l.codigolibro != id)
            {
                return BadRequest("No se encuentro el codigo correspondiente");
            }

            context.Update(l);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {

            var existe = await context.Libro.AnyAsync(x => x.codigolibro == id);
            if (!existe)
            {
                return NotFound();
            }
            var libro = await context.Libro.
                FirstOrDefaultAsync(x => x.codigolibro == id);
            libro.estado = false;
            context.Update(libro);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
