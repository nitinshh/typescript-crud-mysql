import express, { Application } from 'express';
import sequelize from './config/database'
import userRoutes from './routes/userRoutes'

//Create express app
const app: Application = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);

//Sync database
sequelize.sync().then(()=>{
    console.log('Database & Tables created!')
});

export default app;