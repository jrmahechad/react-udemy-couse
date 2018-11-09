import React, { Component } from 'react';
import  queryString  from "querystring";

class Course extends Component {
    
    render () {
        const values = queryString.parse(this.props.location.search.replace('?',''))
        console.log(this.props);
        console.log(values);
        
        return (
            <div>
                <h1>{values.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;