// Clase 20: peticiones AXIOS

import axios from "axios";

export const reqResApi = axios.create({
  baseURL: "https://reqres.in/api",
});
