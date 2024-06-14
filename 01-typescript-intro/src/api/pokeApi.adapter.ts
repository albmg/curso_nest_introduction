import axios from "axios";

export class PokeApiFecthAdapter {
    async get<T>( url: string ):Promise<T> {
        const respo = await fetch(url);
        const data = await respo.json();
        return data;
    }
}
export class PokeApiAdapter {

    private readonly axios = axios;

    async get<T>( url: string) {
        const { data } = await this.axios.get<T>(url)
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