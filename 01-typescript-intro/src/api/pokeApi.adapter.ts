import axios from "axios";

export interface HttpAdapter {
    get<T>( url: string ):Promise<T>;
}

export class PokeApiFecthAdapter implements HttpAdapter {
    async get<T>( url: string ):Promise<T> {
        const respo = await fetch(url);
        const data = await respo.json();
        console.log('con fetch')
        return data;
    }
}
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>( url: string) {
        const { data } = await this.axios.get<T>(url)
        console.log('con axios')
        return data;    
    }

    async post( url: string, data: any) {
        return;    
    }

    async patch( url: string, data: any) {
        return;    
    }

    async delete( url: string) {
        return;    
    }
}