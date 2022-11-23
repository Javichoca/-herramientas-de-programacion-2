using Microsoft.EntityFrameworkCore.Migrations;

namespace Api_Autores.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Libro_Autor_autorcodigoautor",
                table: "Libro");

            migrationBuilder.AlterColumn<int>(
                name: "autorcodigoautor",
                table: "Libro",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "codigoautor",
                table: "Libro",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Libro_Autor_autorcodigoautor",
                table: "Libro",
                column: "autorcodigoautor",
                principalTable: "Autor",
                principalColumn: "codigoautor",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Libro_Autor_autorcodigoautor",
                table: "Libro");

            migrationBuilder.DropColumn(
                name: "codigoautor",
                table: "Libro");

            migrationBuilder.AlterColumn<int>(
                name: "autorcodigoautor",
                table: "Libro",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Libro_Autor_autorcodigoautor",
                table: "Libro",
                column: "autorcodigoautor",
                principalTable: "Autor",
                principalColumn: "codigoautor",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
