using GerenciadorVagas.Data;
using GerenciadorVagas.Dto;
using GerenciadorVagas.Models;
using Microsoft.EntityFrameworkCore;


namespace GerenciadorVagas.Services
{
    

    public class VagasService : IVagasInterface
    {

        private List<VagasDto> ConverterParaDto(List<VagasModel> vagas)
        {
            return vagas.Select(vaga => new VagasDto
            {
                Id = vaga.Id,
                Title = vaga.Title,
                Status = vaga.Status.ToString(),
                Created_at = vaga.Created_at.ToString("dd/MM/yyyy HH:mm:ss"),
                Updated_at = vaga.Updated_at.ToString("dd/MM/yyyy HH:mm:ss")
            }).ToList();
        }

        private readonly AppDbContext _context;
        public VagasService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ResponseModel<List<VagasDto>>> ListarVagas()
        {
            ResponseModel<List<VagasDto>> resposta = new ResponseModel<List<VagasDto>>();
            try
            {
                var vagas = await _context.Vagas.ToListAsync();
                
                var vagasDto = ConverterParaDto(vagas);

                resposta.Dados = vagasDto;
                resposta.Mensagem = "Successo";

                return resposta;
            }
            catch (Exception ex) 
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }

        public async Task<ResponseModel<List<VagasDto>>> CriarVaga(CriacaoVagaDto criacaoVagaDto)
        {
            ResponseModel<List<VagasDto>> resposta = new ResponseModel<List<VagasDto>>();

            try
            {
                var vaga = new VagasModel()
                {
                    Title = criacaoVagaDto.Title,
                    Status = VagaStatus.Aberta, 
                    Created_at = DateTime.Now,
                    Updated_at = DateTime.Now,
                };

                _context.Add(vaga);
                await _context.SaveChangesAsync();

                var vagas = await _context.Vagas.ToListAsync();
                var vagasDto = ConverterParaDto(vagas);

                resposta.Dados = vagasDto;
                resposta.Mensagem = "Vaga criada com sucesso";  
                return resposta;
            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }   
        }

        public async Task<ResponseModel<List<VagasDto>>> EditarVaga(int idVaga, EdicaoVagaDto edicaoVagaDto)
        {
            ResponseModel<List<VagasDto>> resposta = new ResponseModel<List<VagasDto>>();

            

            try
            {
                var vaga = await _context.Vagas.FirstOrDefaultAsync(vaga => vaga.Id == idVaga);

                if (vaga == null)
                {
                    resposta.Mensagem = "Vaga não encontrada";
                    return resposta;
                }

                vaga.Title = edicaoVagaDto.Title ?? vaga.Title;
                if (!string.IsNullOrEmpty(edicaoVagaDto.Status) && Enum.TryParse(edicaoVagaDto.Status, true, out VagaStatus novoStatus))
                {
                    vaga.Status = novoStatus;
                }
                vaga.Updated_at = DateTime.Now;

                _context.Update(vaga);
                await _context.SaveChangesAsync();

                var vagas = await _context.Vagas.ToListAsync();
                var vagasDto = ConverterParaDto(vagas);
                resposta.Dados = vagasDto;
                resposta.Mensagem = "Vaga Editada";
                return resposta;
            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }

        public async Task<ResponseModel<List<VagasDto>>> ExcluirVaga(int idVaga)
        {
            ResponseModel<List<VagasDto>> resposta = new ResponseModel<List<VagasDto>>();

            try
            {
                var vaga = await _context.Vagas.FirstOrDefaultAsync(x => x.Id == idVaga);

                if (vaga == null)
                {
                    resposta.Mensagem = "Vaga não encontrada";
                    return resposta;
                }

                _context.Remove(vaga);
                await _context.SaveChangesAsync();
                
                var vagas = await _context.Vagas.ToListAsync();
                var vagasDto = ConverterParaDto(vagas);
                
                resposta.Dados = vagasDto;
                resposta.Mensagem = "Vaga Excluida";
                return resposta;

            }
            catch (Exception ex)
            {
                resposta.Mensagem = ex.Message;
                resposta.Status = false;
                return resposta;
            }
        }
    }
}
    