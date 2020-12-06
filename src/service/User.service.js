import Axios from "axios";
const API = Axios.create({
    baseURL: 'https://arsene.azurewebsites.net',
    responseType: 'json',
});
export const apiGetUser = async () => {
    return API.get(`/User`);
};
export const apiAddUser = async (user) => {
    return API.post(`/User`, user);
};



