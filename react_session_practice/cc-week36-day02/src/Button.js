import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render(){
        return (
             <button>{this.props.title}</button>
        )
    }
}