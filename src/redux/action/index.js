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
//delete data
const deleteData=(id,callback) =>{
    return () =>{
        axios.deleteData(id).then(()=>{
            callback && callback()
        })
    }
}

export {getData,addData,deleteData};