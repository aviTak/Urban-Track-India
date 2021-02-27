import db from './config';
import React from 'react';
import './footer.css';

class Foot extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      footer_websiteName: '',
      footer_copyrightYear: '',
      footer_linkToPrivacyPolicy: '',
      footer_linkToTermsOfService: ''
    }
  }

  componentDidMount(){
    db.collection("fl_content").doc("eLcJ1wIyCsvyRzznzmWI")
    .onSnapshot(function(doc){
      this.setState({
        footer_websiteName: doc.data().websiteName,
        footer_copyrightYear: doc.data().copyrightYear,
        footer_linkToPrivacyPolicy: doc.data().linkToPrivacyPolicy,
        footer_linkToTermsOfService: doc.data().linkToTermsOfService
      });
      console.log("footer schema updated");      
    }.bind(this));
  }

  render(){
    return(
      <footer>

        {this.state.footer_websiteName && <div className = "line line--1"></div>}
        {this.state.footer_websiteName && <div className = "footer__para">
          <div className = "footer__cover">
            <span className = "footer__link"><a href = {this.state.footer_linkToPrivacyPolicy} rel="noopener noreferrer" target = "_blank">Privacy Policy</a></span>
            <span className = "footer__link">&copy;{this.state.footer_copyrightYear}&nbsp;{this.state.footer_websiteName}</span>
            <span className = "footer__link footer__last"><a href = {this.state.footer_linkToTermsOfService} rel="noopener noreferrer" target = "_blank">Terms of Service</a></span>
          </div>
        </div>}
        {this.state.footer_websiteName && <div className = "line line--2"></div>}

        {this.state.footer_websiteName && <div className = "credit__cover">
          <div className = "credit__name">Designed and developed by <a className = "ms" href = "https://www.linkedin.com/in/avitakiyar-webdevelopment/" rel="noopener noreferrer" target = "_blank">Avi Takiyar</a> and <a className = "ms" href = "https://www.linkedin.com/in/hardik-katehara-a75224147/" rel="noopener noreferrer" target = "_blank">Hardik Katehara</a>.</div>
        </div>}

      </footer>
    );
  }
  
}

export default Foot;

