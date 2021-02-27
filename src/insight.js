import db from './config';
import React from 'react';
import './aboutUs.css';

class Insight extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            aboutUs_detail: '',
            aboutUs_heading: '',
            aboutUs_link: ''
        }
    }

    componentDidMount(){
        db.collection("fl_content").doc("XW37nU1FwmEBzh6Cww5T")
        .onSnapshot(function(doc){
            this.setState({
                aboutUs_detail: doc.data().detail,
                aboutUs_heading: doc.data().heading,
                aboutUs_link: doc.data().link
            });
       
        console.log("aboutUs schema updated");
        }.bind(this));
    }

    render(){
        return(
            <section className = "about__info" id="insight">  
                <h1 className = "about__heading" style = {{paddingTop: 0+'%'}}>{this.state.aboutUs_heading}</h1>
                <div className="about__para" dangerouslySetInnerHTML={{__html: this.state.aboutUs_detail}}></div>
                {this.state.aboutUs_heading && <img data-aos="zoom-in" className = "about__image" alt = "App Insight" src = {this.state.aboutUs_link} />}
            </section>
        );
    }

}

export default Insight;

