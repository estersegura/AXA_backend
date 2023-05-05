import express, { Response, Request } from 'express';
import { ApiService } from '../services/api.service';
import { IClient } from '../models/interfaces/client.model';
import { RESPONSE } from '../constants/error.constant';

const clientsRoute = express.Router();
let clients: IClient[] = [];

clientsRoute.get('/id/:id', async(req: Request, res: Response) => {
    try {
        const apiService = ApiService.getInstance();
        clients = await apiService.getClients();
        const client = clients.find(i => i.id === req.params['id']);
        res.status(200).json(client);
    } catch (error) {
        return res.status(400).json(RESPONSE['BAD_REQUEST_400']);
    }
})

clientsRoute.get('/username/:username', async(req: Request, res: Response) => {
    try {
        const apiService = ApiService.getInstance();
        clients = await apiService.getClients();
        const client = clients.find(i => i.name === req.params['username']);
        res.status(200).json(client);
    } catch (error) {
        return res.status(400).json(RESPONSE['BAD_REQUEST_400']);
    }
})

export default clientsRoute