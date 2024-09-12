import { Request, Response } from 'express';
import User from '../models/userModel';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll();
        res.status(201).json(users);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByPk(req.params.id);
        if(user){
        res.status(200).json(user);
        } else{
            res.status(404).json({ message: 'user not found' });
        }
    } catch (err: unknown) {
         res.status(500).json({ message: "an error occured" });
    }
};


export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await User.update(req.body, {
            where: {id: req.params.id}
        });
        if(updated){
        res.status(500).json({ message: 'User updated' });
        } else{
            res.status(404).json({ message: 'user not found' });
        }
    } catch (err: unknown) {
         res.status(500).json({ message: "an error occured" });
    }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await User.destroy({
            where: {id: req.params.id}
        })
        if(deleted){
            res.status(500).json({ message: 'user deleted' });
        } else{
            res.status(404).json({ message: 'user not found' });
        }
    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
};
