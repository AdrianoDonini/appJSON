import axios from 'axios'; 

const api = axios.create({ 

  baseURL: 'https://api.jsonbin.io/v3/b/663bffe4ad19ca34f8667cc0' 

}); 

export default api; 