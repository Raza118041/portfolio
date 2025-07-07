import * as React from 'react';
import { Html, Head, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactEmail = ({ firstName, lastName, email, phoneNumber, subject, message }: ContactEmailProps) => {
 
 
    return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
          <Heading style={{ fontSize: '24px', color: '#333333' }}>New Contact Form Submission</Heading>
          <Hr style={{ margin: '20px 0' }} />
          <Text style={{ fontSize: '16px', color: '#333333' }}>
            <strong>Name:</strong> {firstName} {lastName}
          </Text>
          <Text style={{ fontSize: '16px', color: '#333333' }}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={{ fontSize: '16px', color: '#333333' }}>
            <strong>Phone Number:</strong> {phoneNumber}
          </Text>
          <Text style={{ fontSize: '16px', color: '#333333' }}>
            <strong>Subject:</strong> {subject}
          </Text>
          <Text style={{ fontSize: '16px', color: '#333333' }}>
            <strong>Message:</strong>
            <br />
            {message}
          </Text>
          <Hr style={{ margin: '20px 0' }} />
          <Text style={{ fontSize: '14px', color: '#666666' }}>
            This email was sent from your website's contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;