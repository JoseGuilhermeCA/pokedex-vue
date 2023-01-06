import axios, { Axios, AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
})

export const getPokemonImageUrl = (url:any) =>  {
    return `${url}`;
}
    
export default api;

