import db from './config';
import React from 'react';
import './aboutUs.css';

class About extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            aboutUs_detail: '',
            aboutUs_heading: '',
            aboutUs_link: ''
        }
    }

    componentDidMount(){
        db.collection("fl_content").doc("lwpuuBN5TNvs9GRepcvS")
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
            <section className = "about__info" id="aboutUs">  
                <h1 className = "about__heading">{this.state.aboutUs_heading}</h1>
                <div className="about__para" dangerouslySetInnerHTML={{__html: this.state.aboutUs_detail}}></div>
                {this.state.aboutUs_heading && <img data-aos="zoom-in" className = "about__image" alt = "Our Team" src = {this.state.aboutUs_link} />}
            </section>
        );
    }

}

export default About;

