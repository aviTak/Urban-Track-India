import db from './config';
import React from 'react';
import './header.css';

class Story extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            header_description: '',
            header_websiteName: ''
        }
    }

    componentDidMount(){
        db.collection("fl_content").doc('gv0tKNQ5CJNrvk95RUdM')
        .onSnapshot(function(doc){
            this.setState({
                header_description: doc.data().description,
                header_websiteName: doc.data().websiteName
            });
            console.log("header schema updated");
        }.bind(this));
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <header id="home">
                <h1 className = "heading__main">{this.state.header_websiteName}</h1>
                <div className="heading__para" dangerouslySetInnerHTML={{__html: this.state.header_description}}></div>
            </header>
        );           
    }

}

export default Story;
