import axios from "axios";


const BASE_URL = "http://localhost:3001/menu";

//This is a function used and called in the "Menu" component that calls a get request from our backend to retrieve all our 'Menu Items'
const fetchMenuItems = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/menu-items`);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default fetchMenuItems;
