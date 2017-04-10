const doctorImporter = require('../importers/doctors-importer')

const doctors = doctorImporter.import('assets/funcionarioshspm2017-2019.csv')

//console.log('doctors', doctors)

//return doctorsCsvImporter('./assets/funcionarioshspm.csv')
//.then((data) => console.log("DATA", data))
//.catch((data) => console.log("DATA", data))