import React from 'react'
import { Form, Input, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import './ContactUs.css'


function ContactUs() {
    
    const SERVICE_ID = "service_55cgpyj";
    const TEMPLATE_ID = "template_13h1gm3";
    const USER_ID = "user_VGnqV5y127J7LXZG03kZy";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong.',
              text: error.text,
            })
          });
        e.target.reset()
      };

    return (
     <div>
     <div className="my-header">
		<header>
			<h1>Contact Us</h1>
		</header>
        </div>
     <div className= "contactMasterDiv">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button data-testid='submitButton' type='submit' variant="contained" endIcon={<SendIcon />}>Submit</Button>
      </Form>
    </div>
    </div>
    )
}

export default ContactUs
