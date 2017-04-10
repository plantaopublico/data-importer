const fs = require('fs')
const hospitalsImporter = require('../importers/hospitals-importer')

const hospitals = hospitalsImporter.import('assets/deinfosacadsau2014.csv')

fs.writeFile('data/hospitals.json', hospitals, 'utf-8', (err, data) => {
    if(err) console.error(err)
    console.log(data)
})

//return doctorsCsvImporter('./assets/funcionarioshspm.csv')
//.then((data) => console.log("DATA", data))
//.catch((data) => console.log("DATA", data))