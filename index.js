const prefeituraCsvImporter = require('./importers/prefeitura-csv-importer')


return prefeituraCsvImporter('./assets/deinfosacadsau2014.csv')
//.then((data) => console.log("DATA", data))
//.catch((data) => console.log("DATA", data))