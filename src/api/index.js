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
    //delete data
    deleteData(id){
        return axios.delete(`/api/${id}`);
    }
}
const api = new Api();
export default api;