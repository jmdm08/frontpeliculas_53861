export const URL_API_PELICULAS = "http://localhost:3300/api";

export function getToken(){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return auth.token;
}