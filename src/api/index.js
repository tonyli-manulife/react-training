import axios from "./axios";

class Api{
    //get data
    getData(){
        return axios.get('/api');
    }
    //add data
    addData(data){
        return axios.post('/api',data);
    }
    //todo delete data and edit data
}
const api = new Api();
export default api;