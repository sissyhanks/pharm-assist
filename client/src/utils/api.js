import axios from 'axios';

const url = 'https://evening-taiga-39557.herokuapp.com/api/users';

export const getSingleUser = () => axios.get(`${url}/getSingleUser`);
export const saveMed = `${url}/saveMed`;
export const register = `${url}/register`;
export const login = `${url}/login`;
export const logout = `${url}/logout`; 
export const loggedIn = `${url}/loggedIn`;