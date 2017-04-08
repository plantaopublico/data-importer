const prefeituraCsvImporter = require('./importers/prefeitura-csv-importer')


prefeituraCsvImporter('./assets/deinfosacadsau2014.csv')
.then((data) => console.log("DATA", data))