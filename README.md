# SisAcademico
# Puerto: 4000

# Dependencias
- cors
- express
- morgan
- pg
- pg-hstore
- sequelize

# Crear tablas
En el archivo **index.js** , **linea 21** chanbie la propiedad force a "true" 
si se necesita crear las primeras tablas en la BD

# Acceso BD
- Base de datos **sisacademico** en Postgress
- Configure las credenciales de acceso en el archivo **database.js**. 
  Se usó el usuario por defecto 'postgres', y una clave de accceso '1234'
 
 
# npm run dev
Para levantar el Servidor
