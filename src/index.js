import app from './app.js';
import {sequelize} from './database/database.js';

// Importando los modelos para guardar en la BD
import './models/Alumno.js';
import './models/Campus.js';
import './models/Carrera.js';
import './models/Edificio.js';
import './models/Materia.js';
import './models/Profesor.js';
import './models/Alumno_Materia.js';
import './models/Profesor_Materia.js';

const port=3000;
const hostname='localhost';


async function main() {
    try {
        // await sequelize.authenticate();
        await sequelize.sync({force: false});
        console.log('Conexion correcta a la BD');
        app.listen(port, hostname);
        console.log('Server listening at port 3000');
    } catch (error) {
        console.log('No se pudo conectar a la BD' + error);
    }
}

main();

