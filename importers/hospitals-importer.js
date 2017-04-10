const Baby = require('babyparse')

module.exports = (filePath) => {
  const parsed = Baby.parseFiles(filePath)
  const lines = parsed.data.map((parsedLine) => {
    const [ID,LONG,LAT,SETCENS,AREAP,CODDIST,DISTRITO,CODSUBPREF,SUBPREF,REGIAO5,REGIAO8,ESTABELECI,ENDERECO,BAIRRO,TELEFONE,CEP,CNES,SA_DEPADM,DEPADM,SA_TIPO,TIPO,SA_CLASSE,CLASSE,LEITOS] = parsedLine
    return { LONG, LAT, DISTRITO, SUBPREF, REGIAO5, REGIAO8, ESTABELECI, ENDERECO, TELEFONE, CEP, DEPADM, TIPO, LEITOS }
  })
  return lines
}