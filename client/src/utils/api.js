import axios from 'axios';

const url = 'https://evening-taiga-39557.herokuapp.com/';

export const getSingleUser = () => axios.get(`${url}/getSingleUser`);
export const saveMed = `${url}/saveMed`;
export const register = `${url}/register`;
export const login = `${url}/login`;
export const logout = `${url}/logout`; 
export const loggedIn = `${url}/loggedIn`;
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);