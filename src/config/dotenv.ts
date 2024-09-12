import dotenv from 'dotenv';

dotenv.config()

export default {
    DATABASE_NAME: process.env.DATABASE_NAME || "typescript",
    DATABASE_USER: process.env.DATABASE_USER || "root",
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "password",
    DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
    PORT: process.env.PORT || 3000
}
