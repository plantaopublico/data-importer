const Baby = require('babyparse')

const getDoctors = (data) => {
    const doctors = []

    data.forEach((info) => {
        if(!doctors.find(x => x.REGISTRO == info.REGISTRO)){
            doctors.push({
                REGISTRO: info.REGISTRO,
                NOME: info.NOME,
                ADMISSAO: info.ADMISSAO,
                VINCULO: info.VINCULO,
                NASCIMENTO: info.NASCIMENTO,
                payment: []
            })
        }
    })

    return doctors
}

const fillDataOnDoctors = (doctors, data) => {
    data.forEach((info) => {
        const doctor = doctors.find(x => x.REGISTRO == info.REGISTRO)
        doctor.payment.push(JSON.stringify({
            MES: info.MES,
            ANO: info.ANO,
            VENCIMENTOS: info.VENCIMENTOS,
            BENEFICIOS: info.BENEFICIOS,
            ENCARGOS: info.ENCARGOS,
            LOTACAO: info.LOTACAO,
            CARGO:  info.CARGO,
            LIMINAR: info.LIMINAR
        }))
    })

    return doctors
}

module.exports = {
    import: (filePath) => {
        const parsed = Baby.parseFiles(filePath)
        const lines = parsed.data.map((parsedLine) => {
            const [EMPRESA,MES,ANO,REGISTRO,NOME,CARGO,LOTACAO,ADMISSAO,NASCIMENTO,VENCIMENTOS,ENCARGOS,BENEFICIOS,OUTRAS,VINCULO,COD_VINCULO,LIMINAR] = parsedLine
            return {
                MES,
                ANO,
                CARGO,
                REGISTRO,
                NOME,
                CARGO,
                LOTACAO,
                ADMISSAO,
                NASCIMENTO,
                VENCIMENTOS,
                ENCARGOS,
                BENEFICIOS,
                VINCULO
            }
        })

        const doctors = getDoctors(lines)
        const filledDoctors = fillDataOnDoctors(doctors, lines)

        console.log(filledDoctors)

        return lines
    }
}