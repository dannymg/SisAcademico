import Sequelize from "sequelize";

export const sequelize = new Sequelize('sisacademico', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});
