using GerenciadorVagas.Dto;
using GerenciadorVagas.Models;
using GerenciadorVagas.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GerenciadorVagas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VagasController : ControllerBase
    {

        private readonly IVagasInterface _vagasInterface;
        public VagasController(IVagasInterface vagasInterface)
        {
            _vagasInterface = vagasInterface;
        }

        [HttpGet("ListarVagas")]
        public async Task<ActionResult<ResponseModel<List<VagasModel>>>> ListarVagas()
        {
            var vagas = await _vagasInterface.ListarVagas();
            return Ok(vagas);   
        }

        [HttpPost("CriarVaga")]
        public async Task<ActionResult<ResponseModel<List<VagasModel>>>> CriarVaga(CriacaoVagaDto criacaoVagaDto)
        {
            var vagas = await _vagasInterface.CriarVaga(criacaoVagaDto);
            return Ok(vagas);   
        }

        [HttpPut("EditarVaga")]
        public async Task<ActionResult<ResponseModel<List<VagasModel>>>> EditarVaga(int idVaga,EdicaoVagaDto edicaoVagaDto)
        {
            var vagas = await _vagasInterface.EditarVaga(idVaga, edicaoVagaDto);
            return Ok(vagas);
        }

        [HttpDelete("ExcluirVaga")]
        public async Task<ActionResult<ResponseModel<List<VagasModel>>>> ExcluirVaga(int idVaga)
        {
            var vagas = await _vagasInterface.ExcluirVaga(idVaga);
            return Ok(vagas);
        }

    }
}
