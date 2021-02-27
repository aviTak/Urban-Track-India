import db from './config';
import React from 'react';
import './contactUs.css';

class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      contactUs_contactHeading: '',
      contactUs_contactInfo: '',
      contactUs_inquiry: '',
      contactUs_inquiryMail: '',
      contactUs_complaint: '',
      contactUs_complaintMail: ''
    }
  }

  componentDidMount(){
    db.collection("fl_content").doc("fgYdhePYIqNkys6tNAKo")
    .onSnapshot(function(doc){
      this.setState({
        contactUs_contactHeading: doc.data().contactHeading,
        contactUs_contactInfo: doc.data().contactInfo,
        contactUs_inquiry: doc.data().inquiry,
        contactUs_inquiryMail: doc.data().inquiryMail,
        contactUs_complaint: doc.data().complaint,
        contactUs_complaintMail: doc.data().complaintMail
      });
      
      console.log("contactUs schema updated");
    }.bind(this));
  }

  render() {
    return(
      <section className = "contact" id="contactUs">

        <h1 className = "contact__heading">{this.state.contactUs_contactHeading}</h1>
        <p className = "contact__para">{this.state.contactUs_contactInfo}</p>
        
        <div className = "clear">

          <div className = "left">
            <h2 className = "sub__heading">{this.state.contactUs_complaint}</h2>
            <p className = "sub__para">{this.state.contactUs_complaintMail}</p>
          </div>

          <div className = "right">
            <h2 className = "sub__heading">{this.state.contactUs_inquiry}</h2>
            <p className = "sub__para">{this.state.contactUs_inquiryMail}</p>
          </div>

        </div>

      </section>
    );
  }

}

export default Contact;