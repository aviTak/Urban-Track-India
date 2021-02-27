import db from './config';
import React from 'react';
import './testimonial.css';

class Testimonial extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            testimonial_testimonials: '',
            testimonial_section: []
        }
    }

    componentDidMount(){
        db.collection("fl_content").doc(this.props.keys)
        .onSnapshot(function(doc){
            this.setState({
                testimonial_testimonials: doc.data().testimonials,
                testimonial_section: doc.data().section
            });
            
            console.log("testimonial schema updated");
        }.bind(this));
    }

    render(){
        let l = this.state.testimonial_section.length;
        let fix = [];

        let classCover = "Tphoto__cover", paraCover = "Tpara__cover", it = "testimonials";
        let design = (
            <div>
                <div className = "xine xine--1"></div>
                <div className = "xine xine--2"></div>
            </div>
        );

        if(this.props.keys === "D4Tz2KjNjjtLf59TS1V4"){
            classCover = "Tphoto__cover part";
            paraCover = "Tpara__cover vet";
            it = "founders";
            design = (
                <div></div>
            );
        } else if(this.props.keys === "BJPPAJ3JSYFuYS6pcLjk") {
            it = "developers";
        } else if(this.props.keys === "qKeR7yncaT9AGOnJKHQO"){
            it = "cofounders";
        }

        for(let i=0; i<l; i++){
            fix[i] = (
                <div key = {'testimonial'+i} className = "clearfix" data-aos="zoom-in">

                    <div className = {classCover}>
                        <div className = "Tphoto" style = {{backgroundImage: `url(${this.state.testimonial_section[i].image})`}}></div>
                        <div className = "temp"><div className = "temp--cent">{this.state.testimonial_section[i].name}</div></div>
                    </div>

                    <div className = {paraCover}>
                        <p className = "Tpara">"{this.state.testimonial_section[i].description}"</p>
                        <span className = "Tspan"> - {this.state.testimonial_section[i].name}</span>
                    </div>

                   {design}

                </div>
            );
        }

        return(
            <section className = "test" id = {it}>
                <h1 className = "test__heading">{this.state.testimonial_testimonials}</h1>
                {this.state.testimonial_section && fix}
            </section>
        );
    }

}

export default Testimonial;
