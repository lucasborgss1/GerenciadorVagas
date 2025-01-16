using System.ComponentModel.DataAnnotations;

namespace GerenciadorVagas.Models
{

    public enum VagaStatus
    {
        Finalizada,
        Aberta
    }

    public class VagasModel
    {
        public int Id {  get; set; }
        public required string Title { get; set; }
        public VagaStatus Status { get; set; }
        public DateTime Created_at { get; set; }
        public DateTime Updated_at { get; set; } 
    }
}
