import React, { Component } from "react";
import {connect} from 'react-redux';
import {getData} from '../../redux/action';
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.props.getData();
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
    render(){
        return (
            <div>there is homepage</div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      data: state?.data
    }
}
const mapDispatchToProps={
    getData
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)