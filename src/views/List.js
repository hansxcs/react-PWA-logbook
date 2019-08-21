import React from "react";
import axios from "axios";

import { Button,DatePicker,Table } from 'antd';

const cookieNim = document.cookie.replace(/(?:(?:^|.*;\s*)nim\s*\=\s*([^;]*).*$)|^.*$/, "$1");

const today = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const thisMonth = months[today.getMonth()];

class List extends React.Component {

  constructor(){
    super();
    this.state={
      data:[],
      key:[]
    }
  }

  


  componentDidMount(){
    this.serverRequest = axios({
      method: 'get',
      url: `https://service.dev.dhirawigata.com/v1/logbook/view?nim=${cookieNim}`,
    }).then(res =>{
      let dateCount = 0;
      let datas = res.data[thisMonth].map( (data)=> {
        
        dateCount++;
        return ({
          date: dateCount+"/"+(today.getMonth()+1),
          key: ""+dateCount,
          clock_in:data.clock_in,
          clock_out:data.clock_out,
          activity:data.activity,
          description:data.description
        });
      });
      
      this.setState({ data: datas}); 
      this.state.key = this.state.data.map((data)=>{
        return data.key;
      });
    }); 

  }
 
  componentWillUnmount(){
    this.serverRequest.abort();
  }
  render() {
    const columns = [
      {
        title:'Date',
        dataIndex:'date'
      },
      {
        title:'Clock In',
        dataIndex:'clock_in'
      },
      {
        title:'Clock Out',
        dataIndex:'clock_out'
      },
      {
        title:'Activity',
        dataIndex:'activity'
      },
      {
        title:'Description',
        dataIndex:'description'
      }
    ]

    

    return (
      <div>
        <Button type="primary">Primary</Button>
        <DatePicker size="default" />
        <Table rowKey="uib" columns={columns} dataSource={this.state.data}></Table>
      </div>
    );
  }
};

export default List;