import express, { Response, Request } from 'express';
import { getClients, getPolicies } from '../services/api.service';
import { RESPONSE } from '../constants/error.constant';
import { IClient } from '../models/interfaces/client.model';

const PolicyRoute = express.Router();

PolicyRoute.get('/username/:username', async(req: Request, res: Response) => {
    try {
        const policies = await getPolicies();
        const client = await getClientByParam('name', req.params['username']);
        const { role: roleClient = '' } = client as IClient;
        if (roleClient !== 'admin') {
            return res.status(403).json(RESPONSE['FORBIDDEN_403']);
        }
        const { id: idClient = '' } = client as IClient;
        const policiesByUsername = policies.filter(i => i.clientId === idClient);
        res.status(200).json(policiesByUsername);
    } catch (error) {
        return res.status(400).json(RESPONSE['BAD_REQUEST_400']);
    }
})

PolicyRoute.get('/number/:id', async(req: Request, res: Response) => {
    try {
        const policies = await getPolicies();
        const policyByNumber = policies.find(i => i.id === req.params['id']);        
        const client = await getClientByParam('id', policyByNumber ? policyByNumber['clientId'] as string: '');
        const { role: roleClient = '' } = client as IClient;
        if (roleClient !== 'admin') {
            return res.status(403).json(RESPONSE['FORBIDDEN_403']);
        }
        res.status(200).json(client);
    } catch (error) {
        return res.status(400).json(RESPONSE['BAD_REQUEST_400']);
    }
})

async function getClientByParam(filterParam: string, value: string) {
    const clients = await getClients();
    switch (filterParam) {
        case "id": return clients.find(i => i.id === value) as IClient;
        case "name": return clients.find(i => i.name === value) as IClient;
        default:
            return clients;
    }
}

export default PolicyRoute