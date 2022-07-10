import React, { Component } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import './index.css'
import { addData } from '../../redux/action';
import { connect } from 'react-redux';
class Create extends Component{
    constructor(props){
        super(props);
        this.state={
            value:{}
        }
    }
    create(){
        const {value} = this.state;
        if(!value.name){
            alert('please input name')
            return
        }
        if(!value.age){
            alert('please input age')
            return
        }
        if(!value.title){
            alert('please input title')
            return
        }
        if(!value.gender){
            alert('please input gender')
            return
        }
        this.props.addData(value,()=>this.props.history.push('/'))
    }
    render(){
        const {value} = this.state;
        return (
            <div>
                <h3>Create new</h3>
                <form>
                    <ul>
                        <li>
                            <label>Name</label>
                            <Input value={value['name']} onChange={(e)=>{this.setState({value:{...value,name:e.target.value}})}} placeholder='Please input name'/>
                        </li>
                        <li>
                            <label>Age</label>
                            <Input value={value['age']} onChange={(e)=>{this.setState({value:{...value,age:e.target.value}})}} placeholder='Please input age'/>
                        </li>
                        <li>
                            <label>Title</label>
                            <Input value={value['title']} onChange={(e)=>{this.setState({value:{...value,title:e.target.value}})}} placeholder='Please input title'/>
                        </li>
                        <li>
                            <label>Gender</label>
                            <Input value={value['gender']} onChange={(e)=>{this.setState({value:{...value,gender:e.target.value}})}} placeholder='Please input gender'/>
                        </li>
                    </ul>
                </form>
                <Button onClick={() => this.create()}>Create</Button>
            </div>
        )
    }
}


const mapDispatchToProps = {
    addData
}

export default connect(null, mapDispatchToProps)(Create)