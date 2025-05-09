import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export async function getMethod<T>(
  token: string | null,
  urlSppecification: string,
  paramsOrVariable: string | null
): Promise<T> {
  try {
    const cleanToken = token?.replace(/"/g, "");
    const headers = token ? { Authorization: `Bearer ${cleanToken}` } : {};
    const url = paramsOrVariable
      ? `${BASE_URL}/${urlSppecification}/${paramsOrVariable}`
      : `${BASE_URL}/${urlSppecification}`; // Utilisation de BASE_URL
    const response = await axios.get<T>(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postMethod<T>(
  token: string | null,
  urlSppecification: string,
  data: T
) {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const url = `${BASE_URL}/${urlSppecification}`; // Utilisation de BASE_URL
    const response = await axios.post<T>(url, data, { headers });
    return JSON.stringify(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postMethodUuid<T>(token: string | null,
  urlSppecification: string,
  data: T) {
    try {
      const headers = token ? { uuid: `${token}` } : {};
      const url = `${BASE_URL}/${urlSppecification}`; 
      const response = await axios.post<T>(url, data, { headers });
      return JSON.stringify(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
}
