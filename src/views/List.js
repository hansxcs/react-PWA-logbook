import React from "react";
import axios from "axios";

const cookieNim = document.cookie.replace(/(?:(?:^|.*;\s*)nim\s*\=\s*([^;]*).*$)|^.*$/, "$1");

class List extends React.Component {

  componentDidMount(){
    axios({
      method: 'get',
      url: `https://service.dev.dhirawigata.com/v1/logbook/view?nim=${cookieNim}`,
    }).then(res =>{
        console.log(res);
    }); 
  }
 
  
  render() {
    return (
      <div>
        test
      </div>
    );
  }
};

export default List;