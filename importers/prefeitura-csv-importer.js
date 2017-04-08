const readFile = require('fs').readFile

const readFileAsync = (filePath) => new Promise((resolve, reject) => readFile(filePath, 'utf8', (err, data) => {
    if(err) reject(err)
    resolve(data)
}))

const readCsv = (csvContent) => {
    const lines = csvContent.split('\n')
    const data = lines.map((line) => {
        const [ID,LONG,LAT,SETCENS,AREAP,CODDIST,DISTRITO,CODSUBPREF,SUBPREF,REGIAO5,REGIAO8,ESTABELECI,ENDERECO,BAIRRO,TELEFONE,CEP,CNES,SA_DEPADM,DEPADM,SA_TIPO,TIPO,SA_CLASSE,CLASSE,LEITOS] = line.split(',')
        return { ID, LONG, LAT}
    })
    return data
}

module.exports = (filePath) => {
    return readFileAsync(filePath)
        .then(readCsv)
}