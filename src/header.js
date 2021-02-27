import db from './config';
import React from 'react';
import './header.css';

class Head extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            header_description: '',
            header_websiteName: ''
        }
    }

    componentDidMount(){
        db.collection("fl_content").doc(this.props.keys)
        .onSnapshot(function(doc){
            this.setState({
                header_description: doc.data().description,
                header_websiteName: doc.data().websiteName
            });
            console.log("header schema updated");
        }.bind(this));
    }

    render(){
        return(
            <header id="home">
                <h1 className = "heading__main">{this.state.header_websiteName}</h1>
                <p className = "heading__para">{this.state.header_description}</p>
            </header>
        );           
    }

}

export default Head;
