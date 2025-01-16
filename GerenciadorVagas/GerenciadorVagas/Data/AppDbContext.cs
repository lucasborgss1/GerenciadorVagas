using GerenciadorVagas.Models;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorVagas.Data
{
    public class AppDbContext : DbContext
    { 
        public DbSet<VagasModel> Vagas { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        }

        public static void SeedData(AppDbContext context)
        {
            if (!context.Vagas.Any())
            {
                context.Vagas.AddRange(
                   new VagasModel
                   {
                       Title = "Desenvolvedor Backend",
                       Status = VagaStatus.Aberta,
                       Created_at = new DateTime(2025, 1, 15, 10, 0, 0),
                       Updated_at = new DateTime(2025, 1, 15, 10, 0, 0)
                   },
                   new VagasModel
                   {
                       Title = "Analista de Sistemas",
                       Status = VagaStatus.Aberta,
                       Created_at = new DateTime(2025, 1, 10, 14, 30, 0),
                       Updated_at = new DateTime(2025, 1, 10, 14, 30, 0)
                   },
                   new VagasModel
                   {
                       Title = "Gerente de Projetos",
                       Status = VagaStatus.Finalizada,
                       Created_at = new DateTime(2025, 1, 5, 18, 0, 0),
                       Updated_at = new DateTime(2025, 1, 5, 18, 0, 0)
                   }
               );

                context.SaveChanges();

            }
        }
    }

}
