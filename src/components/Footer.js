import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer>
      <div>
        <div id="contact" className="form__wrapper p-4 p-md-5">
          <h4 className="font-weight-bold mb-4">GET IN TOUCH</h4>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="form mb-2"
            id="form"
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
                <i className="fa fa-refresh" aria-hidden="true" />
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
              Design by Charlie Waite
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
