using GerenciadorVagas.Models;
using GerenciadorVagas.Dto;

namespace GerenciadorVagas.Services
{
    public interface IVagasInterface
    {
        Task<ResponseModel<List<VagasDto>>> ListarVagas();

        Task<ResponseModel<List<VagasDto>>> CriarVaga(CriacaoVagaDto criacaoVagaDto);

        Task<ResponseModel<List<VagasDto>>> EditarVaga(int idVaga,EdicaoVagaDto edicaoVagaDto);

        Task<ResponseModel<List<VagasDto>>> ExcluirVaga(int idVaga);
    }
}
