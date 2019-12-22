const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crerArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base,argv.limite)
    break;

    case 'crear':
          crerArchivo(argv.base,argv.limite)
          .then(archivo => console.log(`archivo creado ${ archivo }`))
          .catch(e => console.log(e))
    break;

    default:
        console.log('comando no reconocido');
}
//console.log(process);
//let argv2 = process.argv;


//console.log(argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];