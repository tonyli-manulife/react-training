import axios from "../../api"
//get data
const getData=()=>{
    return (dispath) =>{
        axios.getData().then(data=>{
            dispath({
                type:'GET_DATA_SUCCESS',
                data
            })
        })
    }
}
//add data
const addData=(data,callback)=>{
    return () =>{
        axios.addData(data).then(()=>{
            callback && callback();
        })
    }
}
//todo delete data and edit data
export {getData,addData};