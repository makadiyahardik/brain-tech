import React from 'react';
import InputType from '../../atoms/InputType/InputType';
import TexxtArea from '../../atoms/TextArea/TexxtArea';

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
  <div className="row align-items-stretch mb-5">
    <div className="col-md-6">
      <div className="form-group">
      <InputType
          id="name"
          type="text"
          placeholder="Your Name *"
          error="A name is required."
          required="required."
        />
      </div>
      <div className="form-group">
      <InputType
          id="email"
          type="email"
          placeholder="Your Email  *"
          error="Email is not valid."
          required="required,email"
        />
       
      </div>
      <div className="form-group mb-md-0">
      <InputType
        id="phone"
        type="tel"
        placeholder="Your Phone *"
        error="         A phone number is required."
        required="required"
      /> 
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group form-group-textarea mb-md-0">
      <TexxtArea
        id="message"
        placeholder="Your Message *"
        error=" A message is required."
        required="required"
        defaultValue=""
      />
      </div>
    </div>
  </div>



  <div className="text-center">
    <button
      className="btn btn-primary btn-xl text-uppercase disabled"
      id="submitButton"
      type="submit"
    >
      Send Message
    </button>
  </div>
</form>

      </div>
    </section>
  );
};

export default Contact;
