import { CLIENTS_ROUTE, POLICIES_ROUTE } from '../constants/url.constant';
import { Client } from '../models/client.model';
import { Policy } from '../models/policy.model';
import { IPolicy } from '../models/interfaces/policy.model';
import { IClient } from "../models/interfaces/client.model";
import * as dotenv from 'dotenv';

dotenv.config({path: `${__dirname}/../.env`});

const composeRoute = async (url: string): Promise<{}> => {
    const composeUrl = `${process.env.BASE_URL as string}${url}`;
    const response = await fetch(composeUrl);
    return await response.json();
}

export const getClients = async (): Promise<IClient[]> => {
    const response = await composeRoute(CLIENTS_ROUTE) as any;
    return response['clients'];
};
export const getPolicies = async (): Promise<IPolicy[]> => {
    const response = await composeRoute(POLICIES_ROUTE) as any;
    return response['policies'];
};