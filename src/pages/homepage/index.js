import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from "../../components/button";
import Table from "../../components/table";
import { getData } from '../../redux/action';
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
            }
        ]
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
    deleteData(id) {
        let flag = window.confirm('Do you confirm to delete this data?');
        if (flag) {
            this.props.deleteData(id, this.props.getData);
        }
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
    getData
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);