import axios from 'axios';

const url = 'http://localhost:3000/api/users' || 'https://evening-taiga-39557.herokuapp.com/api/users';

export const getSingleUser = () => axios.get(`${url}/getSingleUser`);
export const saveMed = `${url}/saveMed`;
export const register = `${url}/register`;
export const login = `${url}/login`;
export const logout = `${url}/logout`; 
export const loggedIn = `${url}/loggedIn`;