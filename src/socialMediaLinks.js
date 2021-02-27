import db from './config';
import React from 'react';
import './socialMediaLinks.css';

const facebook = '<a id="facebook" href="#" target="_blank"><svg x="0px" y="0px" viewBox="-124 -124 558.00 558.00" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="50px" height="50px" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-124" y="-124" width="558.00" height="558.00" rx="279" fill="#000000" stroke-width="0"></rect></g> <g> <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path> </g></svg></a>';
const instagram = '<a id="instagram" href="#" target="_blank"><svg x="0px" y="0px" width="50px" height="50px" viewBox="-50.72 -50.72 270.50 270.50" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-50.72" y="-50.72" width="270.50" height="270.50" rx="135.25" fill="#000000" stroke-width="0"></rect></g> <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"></path> <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"></path> <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"></path> </svg></a>';
const linkedin = '<a id="linkedin" href="#" target="_blank"><svg x="0px" y="0px" width="50px" height="50px" viewBox="-27.92 -27.92 148.90 148.90" style="enable-background:new 0 0 93.06 93.06;" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-27.92" y="-27.92" width="148.90" height="148.90" rx="74.45" fill="#000000" stroke-width="0"></rect></g> <path d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184 C22.362,5.091,17.351,0.08,11.185,0.08z"></path> <rect x="1.538" y="30.926" width="19.287" height="62.054"></rect> <path d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281 c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942 C93.06,42.235,89.455,29.383,69.925,29.383z"></path> </svg></a>';
const twitter = '<a id="twitter" href="#" target="_blank"><svg x="0px" y="0px" viewBox="-93 -93 496.00 496.00" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="50px" height="50px" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-93" y="-93" width="496.00" height="496.00" rx="248" fill="#000000" stroke-width="0"></rect></g> <g> <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"></path> </g></svg></a>';
const pinterest = '<a id="pinterest" href="#" target="_blank"><svg x="0px" y="0px" width="50px" height="50px" viewBox="-29.3 -29.3 156.27 156.27" style="enable-background:new 0 0 97.672 97.672;" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-29.3" y="-29.3" width="156.27" height="156.27" rx="78.135" fill="#000000" stroke-width="0"></rect></g> <path d="M51.125,0C24.469,0,11.029,19.11,11.029,35.047c0,9.649,3.653,18.232,11.487,21.432c1.286,0.525,2.438,0.019,2.812-1.403 c0.258-0.985,0.871-3.468,1.144-4.503c0.376-1.407,0.229-1.9-0.807-3.126c-2.259-2.665-3.703-6.115-3.703-11.002 c0-14.178,10.608-26.87,27.624-26.87c15.064,0,23.342,9.206,23.342,21.5c0,16.176-7.159,29.828-17.786,29.828 c-5.87,0-10.262-4.854-8.854-10.807c1.686-7.107,4.951-14.778,4.951-19.907c0-4.592-2.463-8.423-7.565-8.423 c-6,0-10.819,6.207-10.819,14.521c0,5.296,1.789,8.878,1.789,8.878s-6.141,26.015-7.215,30.571 c-2.145,9.072-0.322,20.195-0.168,21.318c0.089,0.666,0.944,0.824,1.332,0.322c0.555-0.723,7.7-9.544,10.129-18.359 c0.687-2.496,3.944-15.42,3.944-15.42c1.95,3.717,7.647,6.992,13.706,6.992c18.034,0,30.271-16.441,30.271-38.45 C86.644,15.498,72.547,0,51.125,0z"></path> </svg></a>';
const tumblr = '<a id="tumblr" href="#" target="_blank"><svg x="0px" y="0px" viewBox="-93 -93 496.00 496.00" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="50px" height="50px" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-93" y="-93" width="496.00" height="496.00" rx="248" fill="#000000" stroke-width="0"></rect></g> <g> <path d="M249.775,236.928c-1.613-0.873-3.58-0.789-5.119,0.221c-14.15,9.295-28.469,14.007-42.557,14.007 c-7.678,0-14.285-1.725-20.236-5.297c-4.023-2.366-6.688-5.399-8.139-9.257c-1.107-2.978-2.43-10.9-2.43-31.739v-71.945h66.168 c2.762,0,5-2.239,5-5V80.818c0-2.762-2.238-5-5-5h-66.168V5c0-2.762-2.238-5-5-5h-42.684c-2.523,0-4.652,1.881-4.961,4.386 c-1.836,14.831-5.201,27.143-10.01,36.601c-4.744,9.381-11.141,17.526-19.018,24.216c-7.842,6.687-17.451,11.899-28.563,15.491 c-2.064,0.667-3.463,2.589-3.463,4.758v42.466c0,2.761,2.238,5,5,5h28.168v100.237c0,14.492,1.523,25.36,4.656,33.218 c3.158,7.955,8.83,15.496,16.863,22.418c7.922,6.801,17.568,12.104,28.67,15.758c10.971,3.618,23.73,5.452,37.922,5.452 c12.416,0,24.141-1.269,34.85-3.772c10.73-2.514,22.779-6.91,35.811-13.065c1.75-0.826,2.865-2.587,2.865-4.521v-47.314 C252.402,239.49,251.395,237.8,249.775,236.928z"></path> </g></svg></a>';
const youtube = '<a id="youtube" href="#" target="_blank"><svg x="0px" y="0px" viewBox="-109.88 -109.88 586.02 586.02" style="enable-background:new 0 0 366.259 366.259;" xml:space="preserve" width="50px" height="50px" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-109.88" y="-109.88" width="586.02" height="586.02" rx="293.01" fill="#000000" stroke-width="0"></rect></g> <path d="M351.479,71.073c-2.047-7.833-8.614-13.659-16.634-14.758c-50.333-6.899-101.384-10.397-151.737-10.397 c-50.352,0-101.392,3.498-151.697,10.398c-8.02,1.1-14.586,6.926-16.633,14.758c-19.704,75.403-19.704,148.711,0,224.113 c2.047,7.832,8.614,13.659,16.635,14.758c50.339,6.899,101.394,10.397,151.745,10.397c50.353,0,101.389-3.498,151.688-10.398 c8.02-1.1,14.585-6.925,16.632-14.756C371.186,219.794,371.186,146.486,351.479,71.073z M247.165,197.261l-74.357,57.131 c-3.172,2.439-7.006,3.689-10.86,3.689c-2.681,0-5.374-0.604-7.875-1.835c-6.089-3-9.942-9.198-9.942-15.986V125.999 c0-6.789,3.854-12.987,9.942-15.986c6.091-3,13.352-2.281,18.735,1.854l74.357,57.13c4.393,3.373,6.966,8.596,6.966,14.132 C254.13,188.665,251.557,193.888,247.165,197.261z"></path> </svg></a>';
const whatsapp = '<a id="whatsapp" href="#" target="_blank"><svg x="0px" y="0px" viewBox="-92.4 -92.4 492.80 492.80" style="enable-background:new 0 0 308 308;" xml:space="preserve" width="50px" height="50px" fill="#ffffff" stroke="#ffffff" stroke-width="0"><g><rect x="-92.4" y="-92.4" width="492.80" height="492.80" rx="246.4" fill="#000000" stroke-width="0"></rect></g> <g> <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g></svg></a>';

class Social extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      socialMediaLinks_facebook: '',
      socialMediaLinks_instagram: '',
      socialMediaLinks_linkedin: '',
      socialMediaLinks_twitter: '',
      socialMediaLinks_pinterest: '',
      socialMediaLinks_tumblr: '',
      socialMediaLinks_youtube: '',
      socialMediaLinks_whatsapp: ''
    }
  }

  componentDidUpdate(){

    try{
      document.getElementById('rom--facebook').innerHTML = facebook;
      document.getElementById('facebook').href = this.state.socialMediaLinks_facebook;

      document.getElementById('rom--instagram').innerHTML = instagram;
      document.getElementById('instagram').href = this.state.socialMediaLinks_instagram;

      document.getElementById('rom--linkedin').innerHTML = linkedin;
      document.getElementById('linkedin').href = this.state.socialMediaLinks_linkedin;

      document.getElementById('rom--twitter').innerHTML = twitter;
      document.getElementById('twitter').href = this.state.socialMediaLinks_twitter;

      document.getElementById('rom--pinterest').innerHTML = pinterest;
      document.getElementById('pinterest').href = this.state.socialMediaLinks_pinterest;

      document.getElementById('rom--tumblr').innerHTML = tumblr;
      document.getElementById('tumblr').href = this.state.socialMediaLinks_tumblr;

      document.getElementById('rom--youtube').innerHTML = youtube;
      document.getElementById('youtube').href = this.state.socialMediaLinks_youtube;

      document.getElementById('rom--whatsapp').innerHTML = whatsapp;
      document.getElementById('whatsapp').href = this.state.socialMediaLinks_whatsapp;
    }

    catch(e){}

  }

  componentDidMount(){
    db.collection("fl_content").doc("kjuisE8AgtnIHExT8UV8")
    .onSnapshot(function(doc){
      this.setState({
        socialMediaLinks_facebook: doc.data().facebook,
        socialMediaLinks_instagram: doc.data().instagram,
        socialMediaLinks_linkedin: doc.data().linkedin,
        socialMediaLinks_twitter: doc.data().twitter,
        socialMediaLinks_pinterest: doc.data().pinterest,
        socialMediaLinks_tumblr: doc.data().tumblr,
        socialMediaLinks_youtube: doc.data().youtube,
        socialMediaLinks_whatsapp: doc.data().whatsapp
      });  
    
      console.log("socialMediaLinks schema updated");
    }.bind(this));
  }

  render(){
    return(
      <section className = "social">
        <div id= "flaw">
          {this.state.socialMediaLinks_facebook && <span id = "rom--facebook"></span>}
          {this.state.socialMediaLinks_instagram && <span id = "rom--instagram"></span>}
          {this.state.socialMediaLinks_linkedin && <span id = "rom--linkedin"></span>}
          {this.state.socialMediaLinks_twitter && <span id = "rom--twitter"></span>}
          {this.state.socialMediaLinks_pinterest && <span id = "rom--pinterest"></span>}
          {this.state.socialMediaLinks_tumblr && <span id = "rom--tumblr"></span>}
          {this.state.socialMediaLinks_youtube && <span id = "rom--youtube"></span>}
          {this.state.socialMediaLinks_whatsapp && <span id = "rom--whatsapp"></span>}
        </div>
      </section>
    );
  }

}

export default Social;
