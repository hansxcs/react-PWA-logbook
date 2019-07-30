import React from 'react';
import axios from 'axios';

export default class Person extends React.Component {
    state = {
        persons: []
    };

    getPerson = async () =>{
<<<<<<< HEAD
        await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res);
                this.setState({
                    persons: res.data
                });
            });
=======
        // await axios.get(`https://jsonplaceholder.typicode.com/users`)
        //     .then(res => {
        //         console.log(res);
        //         this.setState({
        //             persons: res.data
        //         });
        //     });
>>>>>>> 56d6e3bc9e3a5c4d2e6272aa12da91c006fdf253
        
    }

    componentDidMount() {
        this.getPerson();
        // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    };

    render(){
        return(
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        );
    }


}