import React from 'react';
import './navbar.css';

var last = 0, timer = null, ae = true, navham, set, x;
const menu = '<svg class="menq" x="0px" y="0px" viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" xml:space="preserve" width="40px" height="40px" fill="#fdf0c4" stroke="#fdf0c4" stroke-width="0"><g id="IconsRepo_bgCarrier"></g> <path d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M40,41H16c-1.104,0-2-0.896-2-2s0.896-2,2-2 h24c1.104,0,2,0.896,2,2S41.104,41,40,41z M40,30H16c-1.104,0-2-0.896-2-2s0.896-2,2-2h24c1.104,0,2,0.896,2,2S41.104,30,40,30z M40,19H16c-1.104,0-2-0.896-2-2s0.896-2,2-2h24c1.104,0,2,0.896,2,2S41.104,19,40,19z"></path> </svg>';

const work = ()=>{

    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(()=>{
        // Scrolling stopped
        ae = true;
    }, 300);

    try{
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > last){
        navham.style.transform = "translateY(-100%)"; 
        navham.style.boxShadow = "0 0 0 0"; 
        if (x.classList.contains("show")) 
            x.classList.remove("show");
        }
        else if(ae){
            navham.style.transform = "translateY(0)";
            navham.style.boxShadow = "4px 4px 6px #7480b8"; 
        }

        last = scrollTop;
    }
    catch(e){}
};

window.addEventListener("scroll", work);

const hide = ()=>{
    try{
        ae = false;
        navham.style.transform = "translateY(-100%)"; 
        navham.style.boxShadow = "0 0 0 0";
        if (x.classList.contains("show")) 
            x.classList.remove("show");
    }
    catch(e){}
};

const funk = ()=>{
    try{
        if (x.classList.contains("show")) 
            x.classList.remove("show");
        else 
            x.classList.add("show");
    }
    catch(e){}
};

class Devbar extends React.Component{
    
    componentDidMount(){
        try{
            navham = document.getElementsByClassName("navham")[0];
            set = document.getElementsByClassName("hamburgera")[0];
            set.innerHTML = menu;
            x = document.getElementsByClassName("hammenu")[0];
            set.addEventListener('click', funk);
        }
        catch(e){}        
    }

    render(){

        return(
            <nav className = "navham">

                <div className = "navbar">
                    <a className = "navlogoa navlinks" href = "#home" onClick = {hide}>Urban Track India</a>
                    <a className = "navlinks last--link" href = "achievements">Achievements</a> 
                    <a className = "navlinks" href = "#contactUs" onClick = {hide}>Contact Us</a>
                    <a className = "navlinks" href = "#developers" onClick = {hide}>Developers</a>
                    <a className = "navlinks" href = "#cofounders" onClick = {hide}>Co-Founders</a> 
                    <a className = "navlinks" href = "/">Homepage</a>                              
                </div>  

                <div className = "hamburgera"></div>

                <ul className = "hammenu">
                    <li><a href = "/" className = "hamlink">Homepage</a></li>       
                    <li><a className = "hamlink" href = "#cofounders" onClick = {hide}>Co-Founders</a></li>
                    <li><a className = "hamlink" href = "#developers" onClick = {hide}>Developers</a></li>
                    <li><a className = "hamlink" href = "#contactUs" onClick = {hide}>Contact Us</a></li>      
                    <li><a href = "achievements" className = "hamlink">Achievements</a></li>                      
                </ul>
            
            </nav>
        );          
           
    }

}

export default Devbar;
