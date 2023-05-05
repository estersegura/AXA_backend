import { CLIENTS_ROUTE, POLICIES_ROUTE } from '../constants/url.constant';
import { IPolicy } from '../models/interfaces/policy.model';
import { IClient } from "../models/interfaces/client.model";
import environmentVariable from "./env.service";


export class ApiService {
    private static instance: ApiService;

    private constructor() { }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    private composeRoute = async (url: string): Promise<{}> => {
        const composeUrl = `${environmentVariable().BASE_URL as string}${url}`;
        const response = await fetch(composeUrl);
        return response.json();
    }

    getClients = async (): Promise<IClient[]> => {
        const result = await this.composeRoute(CLIENTS_ROUTE as string) as any;
        return result['clients'];
    };
    getPolicies = async (): Promise<IPolicy[]> => {
        const result = await this.composeRoute(POLICIES_ROUTE as string) as any;
        return result['policies'];
    };
}