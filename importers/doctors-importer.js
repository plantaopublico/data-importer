const Baby = require('babyparse')

module.exports = (filePath) => {
  const parsed = Baby.parseFiles(filePath)
  const lines = parsed.data.map((parsedLine) => {
    const [EMPRESA,MES,ANO,REGISTRO,NOME,CARGO,LOTACAO,ADMISSAO,NASCIMENTO,VENCIMENTOS,ENCARGOS,BENEFICIOS,OUTRAS,VINCULO,COD_VINCULO,LIMINAR] = parsedLine
    return { MES, ANO, CARGO, REGISTRO, NOME, CARGO, LOTACAO, ADMISSAO,  NASCIMENTO, VENCIMENTOS, ENCARGOS,  BENEFICIOS, VINCULO  }
  })


  console.log(lines)
  return lines
}