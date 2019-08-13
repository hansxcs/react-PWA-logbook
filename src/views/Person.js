import React from "react";


export default class Person extends React.Component {
  state = {
    persons: []
  };

  getPerson = async () => {
    
  };

  componentDidMount() {
    this.getPerson();
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
