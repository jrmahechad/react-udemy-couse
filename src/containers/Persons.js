import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProsp = dispatch => {
  return {
    onAddPerson: (name, age) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        payload: { name: name, age: age }
      }),
    onRemovePerson: personId =>
      dispatch({ type: actionTypes.REMOVE_PERSON, payload: personId })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(Persons);
