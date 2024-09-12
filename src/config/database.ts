import {Sequelize} from 'sequelize'
import dotenv from './dotenv';

const sequelize = new Sequelize(
    dotenv.DATABASE_NAME,
    dotenv.DATABASE_USER,
    dotenv.DATABASE_PASSWORD, {
        host: dotenv.DATABASE_HOST,
        dialect: 'mysql'
    }
);

export default sequelize;
