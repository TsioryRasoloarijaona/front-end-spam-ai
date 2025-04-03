import axios from 'axios';

export async function getMethod<T>(token: string | null , urlSppecification : string , paramsOrVariable : string | null): Promise<T> {
    try {
        const cleanToken = token?.replace(/"/g, "")
        const headers = token ? { Authorization: `Bearer ${cleanToken}` } : {};
        const url = paramsOrVariable ? `http://localhost:8080/${urlSppecification}/${paramsOrVariable}` : `http://localhost:8080/${urlSppecification}`;
        console.log("heeder" , headers.Authorization)
        const response = await axios.get<T>(url, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


export async function postMethod<T>(token: string | null, urlSppecification: string, data: T) {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const url = `http://localhost:8080/${urlSppecification}`;
        const response = await axios.post<T>(url, data, { headers });
        return JSON.stringify(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

