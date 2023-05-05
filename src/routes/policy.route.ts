import express, { Response, Request, NextFunction } from 'express';
import { ApiService } from '../services/api.service';
import { RESPONSE } from '../constants/error.constant';
import { IClient } from '../models/interfaces/client.model';
import { IPolicy } from '../models/interfaces/policy.model';
import environmentVariable from "../services/env.service";

const PolicyRoute = express.Router();
let policies: IPolicy[] = [];
let clients: IClient[] = [];
let client: IClient;

async function getClientRole(req: Request, res: Response, next: NextFunction) {
    const apiService = ApiService.getInstance();
    policies = await apiService.getPolicies();
    clients = await apiService.getClients();    
    try {
        client = await getClientByParam(req.params['id'] !== undefined ? 'id' : 'username', req.params['id'] !== undefined ? req.params['id'] : req.params['username']) as IClient;
        const { role: roleClient = '' } = client as IClient;
        if (roleClient !== environmentVariable().ADMIN_ROLE) {
            return res.status(403).json(RESPONSE['FORBIDDEN_403']);
        }
        next();
    } catch (error) {
        return res.status(400).json(RESPONSE['BAD_REQUEST_400']);
    }
}

async function getClientByParam(filterParam: string, value: string) {
    switch (filterParam) {
        case "id": return clients.find(i => i.id === value) as IClient;
        case "username": return clients.find(i => i.name === value) as IClient;
        default:
            return clients;
    }
}

PolicyRoute.get('/number/:id', async (req: Request, res: Response) => {
    try {
        const policyByNumber = policies.find(i => i.id === req.params['id']);
        const client = await getClientByParam('id', policyByNumber ? policyByNumber['clientId'] as string: '');
        const { role: roleClient = '' } = client as IClient;
        if (roleClient !== environmentVariable().ADMIN_ROLE) {
            return res.status(403).json(RESPONSE['FORBIDDEN_403']);
        }
        res.status(200).json(client);
    } catch (error) {
        return res.status(500).json(RESPONSE['BAD_REQUEST_400']);
    }
})

PolicyRoute.get('/username/:username', getClientRole, async (req: Request, res: Response) => {
    try {
        const policiesByUsername = policies.filter(i => i.clientId === client.id);
        res.status(200).json(policiesByUsername);
    } catch (error) {
        return res.status(500).json(RESPONSE['BAD_REQUEST_400']);
    }
})

export default PolicyRoute