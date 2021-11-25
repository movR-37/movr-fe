import React from 'react'
import { useState } from 'react';
import Header from '../../components/faq/Header';
import FAQ from '../../components/faq/FAQ';
import './faqPage.css'


function FaqPage() {
    const [faqs, setfaqs] = useState([
        {
          question: 'How is my payment made?',
          answer: 'Your payment is made via an online payment processor called Stripe.',
          open: false
        },
        {
          question: 'How to request a service?',
          answer: 'You can request a movR following these steps: \
          Select city of residence and service type, press "Get Started".\
           The System will match you with the nearest first available movR.\
          If you’re getting the message “No movRs available”, please wait a couple of minutes and try to request again.',
          open: false
        },
        {
          question: 'How are the tariffs calculated?',
          answer: 'A relocation service\'s cost is determined using a predefined\
          hourly rate, the estimed distance, the estimated time and GST + QST.',
          open: false
        },
        {
            question: 'Can I Cancel a service?',
            answer: 'You have the option to review a movR\'s profile and chat with them\
            before opting to proceed with the service. If you press cancel, you will be taken\
             back to the homepage where you can enter a new request.',
            open: false
        },
        {
            question: 'Can I pay in cash?',
            answer: 'You can only pay for the service via the Stripe payment method.\
            You can, however, use cash to tip a movR.',
            open: false
        },
        {
            question: 'What is the cancellation fee?',
            answer: 'At MovR we appreciate the users\' time. That being said, there is no cancellation\
            fee, however cancelling frequently can cause you to have bad reviews which can lower your rating.',
            open: false
        },

      ]);
    
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
    
    
      return (
        <div className="faqRootContainer">
          <Header></Header>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      );
}

export default FaqPage
