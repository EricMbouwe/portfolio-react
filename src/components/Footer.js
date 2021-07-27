import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';

function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i9b26wh',
        'template_ywk08vq',
        e.target,
        'user_ZAXv29kjr2dMbSkCO1CpC',
      ) 
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }
  return (
    <footer>
      <div id="contact" className="form__wrapper p-4 p-md-5">
        <h4 className="font-weight-bold mb-4">GET IN TOUCH</h4>
        <form
          name="contact"
          data-netlify="true"
          className="form mb-2"
          id="form"
          onSubmit={sendEmail}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              id="name"
              aria-describedby="namelHelp"
            />
            <FontAwesomeIcon icon="check-circle" />
            <FontAwesomeIcon icon="exclamation-circle" />
            <small className="error-message">Error message</small>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              id="email"
              aria-describedby="emailHelp"
            />
            <FontAwesomeIcon icon="check-circle" />
            <FontAwesomeIcon icon="exclamation-circle" />
            <small className="error-message">Error message</small>
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              id="comment"
              rows={4}
              defaultValue={''}
            />
            <FontAwesomeIcon icon="check-circle" />
            <FontAwesomeIcon icon="exclamation-circle" />
            <small className="error-message">Error message</small>
          </div>

          <button type="submit" className="hello-btn w-100 border-0 mt-3">
            Send
            <span id="loader">
              <FontAwesomeIcon icon="spinner" />
            </span>
          </button>
        </form>

        <div className="submit-status" id="submitStatus">
          <p id="submitStatusText" />
        </div>
      </div>

      <div className="footer-bottom grey-sec text-white text-center p-3">
        <small>©2018 Eric Mbouwe. </small>
        <small>
          <a
            href="https://icons8.com/icon/13930/linkedin"
            className="text-white"
          >
            Le Consultant
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
