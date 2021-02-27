import db from './config';
import React from 'react';
import './photo.css';

class Photo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            detail: '',
            heading: '',
            url: ''
        }
    }

    componentDidMount(){
        db.collection("fl_content").doc('W7z77vtsGFcTHs85sKSY')
        .onSnapshot(function(doc){
            this.setState({
                detail: doc.data().detail,
                heading: doc.data().heading,
                url: doc.data().backgroundImage
            });
            console.log("photo schema updated");
        }.bind(this));
    }

    render(){
        return(
            <div className = "home__image" id="home" style = {{backgroundImage: `linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${this.state.url})`}}>
                <div className = "image__container">
                    <div className="image__heading" dangerouslySetInnerHTML={{__html: this.state.heading}}></div>
                    <div className="image__para" dangerouslySetInnerHTML={{__html: this.state.detail}}></div>
                </div>
            </div>
        );           
    }

}

export default Photo;
