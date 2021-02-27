import db from './config';
import React from 'react';
import './infographics.css';

var index = 1, l = 0;
var change = {};

const func = n => {
    plusdiv(n);
    clearInterval(change);
    change = setInterval(automatic, l*1000*1.65);
};

const plusdiv = n => {
    showdiv(index = index+n);
};

const automatic = () => {
    plusdiv(1);
};

const showdiv = n => {
    let i;
    let x = document.getElementsByClassName("slide");
    if(n>x.length)
        index = 1;
    if(n<1)
        index = x.length;    
    for(i=0 ; i<x.length; i++){
        x[i].style.display = "none";
    }    
    x[index-1].style.display = "block"; 
};

class Info extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            infographics_gallery: []
        };
    }

    componentDidMount(){
        db.collection("fl_content").doc(this.props.keys)
        .onSnapshot(function(doc){
            this.setState({
                infographics_gallery: doc.data().gallery
            });
            
            console.log("infographics schema updated");
        }.bind(this));
    }
    
    componentDidUpdate(){
        showdiv(index);
        l = this.state.infographics_gallery.length;
        clearInterval(change);
        change = setInterval(automatic, l*1000*1.65);
        document.getElementById('bt1').addEventListener("click", ()=>{func(-1)});
        document.getElementById('bt2').addEventListener("click", ()=>{func(1)});
    }

    render(){
        let lt = this.state.infographics_gallery.length;
        let imgs = [];

        for(let i = 0; i < lt; i++) {
            imgs[i] = <img key = {'image'+i} className = "slide" src = {this.state.infographics_gallery[i].image} alt = {this.state.infographics_gallery[i].title} />;
        }
        
        return(
            <section className = "slideshow" data-aos="zoom-in">
                {this.state.infographics_gallery && imgs}
                {this.state.infographics_gallery && <button className = "btnleft btn" id = "bt1">&#10094;</button>}
                {this.state.infographics_gallery && <button className = "btnright btn" id = "bt2">&#10095;</button>}
            </section>
        );
    }

}                                                       

export default Info;

