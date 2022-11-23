using api_autores.Entitys;
using Microsoft.EntityFrameworkCore;
using System;

namespace api_autores
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) :
       base(options)
        {
        }
        //configurando las tablas de la base datos
        public DbSet<Autor> Autor { get; set; }
        public DbSet<Libro> Libro { get; set; }

        //configurando el update 
       internal void Update(object libro)
        {
            throw new NotImplementedException();
        }
    }
}