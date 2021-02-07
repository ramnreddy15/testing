import React, {Component} from "react";
import emailjs from "emailjs-com";
import {createGlobalStyle} from 'styled-components';
import {StyledFormWrapper, StyledForm, StyledButton, StyledError, StyledInput, StyledTextArea, StyledTextAreaSubject, ButtonSet} from "./assets/StyledContactForm.js";
import './assets/contact.scss'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background-color: #293241;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

class ContactForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      error:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  handleNameChange(event) {
    this.setState({ 
      name: event.target.value 
    });
  }

  handleEmailChange(event) {
    this.setState({ 
      email: event.target.value 
    });
  }

  handleSubjectChange(event) {
    this.setState({ 
      subject: event.target.value 
    });
  }

  handleMessageChange(event) {
    this.setState({ 
      message: event.target.value 
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    var i = 0;
    for (let key in this.state) {
      if (this.state[key] === '' && i<4) {
        this.setState({error: `You must provide a ${key}`});
        return
      }
      i++;
    }
    this.setState({error: ``});

    alert('You will get and email from us shortly!');
    alert('These are the details you have submitted!');
    alert(this.state.name);
    alert(this.state.email);
    alert(this.state.subject);
    alert(this.state.message);

    emailjs.sendForm('service_5ggwj8d', 'template_jirc6zm', event.target, 'user_XtSzEFFNtc4C6IEpGN9JS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
  }

  scrollDown(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
    
  }

  render() {

    return (
      <>
        <GlobalStyle />
        <StyledFormWrapper id="backUp">
          <StyledForm onSubmit={this.handleSubmit}>
            <h2>Contact Form</h2>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              name="name"
              onChange={this.handleNameChange}
            />
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              name="email"
              onChange={this.handleEmailChange}
            />
            <label htmlFor="subject">Subject</label>
            <StyledTextAreaSubject
              name="subject"
              onChange={this.handleSubjectChange}
            />
            <label htmlFor="message">Message</label>
            <StyledTextArea
              name="message"
              onChange={this.handleMessageChange}
            />
            <StyledError>
              <p>{this.state.error}</p>
            </StyledError>
            
            <StyledButton type="submit">Send Message</StyledButton>
          </StyledForm>
        </StyledFormWrapper>
        <button2 onClick={() => this.scrollDown("goHere")}>⤋ Or Find Us At ⤋</button2>
        <ButtonSet id="goHere">
          <a href="https://www.linkedin.com/in/potentia-robotics-790582204/" target="_blank" className="fa fa-linkedin"></a>
          <span><br></br></span>
          <a href="https://www.youtube.com/channel/UCKzWtwtWSejKt9THR_XlU7Q" target="_blank" className="fa fa-youtube"></a>
          <span><br></br></span>
          <a href="https://github.com/tjhrc" target="_blank" className="fa fa-github"></a>
          <span><br></br></span>
          <a href="#" target="_blank" className="fa fa-instagram"></a>
          <span><br></br></span>
          <a href="https://www.facebook.com/potentiarobotics/" target="_blank" className="fa fa-facebook"></a>
          <span><br></br></span>
          <button onClick={() => this.scrollDown("backUp")} className="fa fa-envelope"></button>
        </ButtonSet>
      </>
  );
  }
}


export default ContactForm;