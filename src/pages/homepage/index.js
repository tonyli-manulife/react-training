import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from "../../components/button";
import Table from "../../components/table";
import { getData,deleteData} from '../../redux/action';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.columns = [
            {
                label: 'ID',
                key: 'id',
            },
            {
                label: 'Name',
                key: 'name',
            },
            {
                label: 'Age',
                key: 'age',
            },
            {
                label: 'Title',
                key: 'title',
            },
            {
                label: 'Gender',
                key: 'gender',
            },
            {
                label:'Operate',
                render:(value,row) => {
                    return (
                        <p>
                            <a onClick={(e)=>this.editClick(e,row)} href="#">Edit</a>&nbsp;
                            <a onClick={(e)=>this.deleteClick(e,row)} href="#">Delete</a>
                        </p>
                    )
                }
            }
        ]
    }

    editClick(e,data){
        //阻止浏览器a标签默认点击事件
        e.preventDefault();
        this.props.history.push('/create',{data})
    }

    deleteClick(e,data){
        //阻止浏览器a标签默认点击事件
        e.preventDefault();
        this.props.deleteData(data.id,()=>this.props.getData())
    }

    componentDidMount() {
        this.props.getData();
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this.setState({
            data
        })
    }
    render() {
        const { data } = this.state;
        return (
            <>
                <Table
                    columns={this.columns}
                    data={data}
                />
                <Button onClick={()=>this.props.history.push('create')}>Add</Button>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state?.data
    }
}
const mapDispatchToProps = {
    getData,
    deleteData
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);