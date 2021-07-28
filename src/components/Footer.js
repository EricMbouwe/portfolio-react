import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import { useState } from 'react';

function Footer() {
  const [state, setState] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [statusOnFormSubmit, setStatusOnFormSubmit] = useState('');
  const [checkingInputs, setCheckingInputs] = useState(false);
  const [errorName, setErrorForName] = useState(false);
  const [errorComment, setErrorForComment] = useState(false);
  const [errorEmail, setErrorForEmail] = useState({
    invalid: false,
    blank: false,
  });

  function handleChange(e) {
    const value = e.target.value.trim();
    setState({
      ...state,
      [e.target.id]: value,
    });
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  }

  function checkInputs() {
    setCheckingInputs(true);

    setTimeout(() => {
      if (state.name === '') {
        setErrorForName(true);
      } else {
        setErrorForName(false);
      }

      if (state.email === '') {
        setErrorForEmail({
          ...errorEmail,
          blank: true,
        });
      } else if (!isEmail(state.email)) {
        setErrorForEmail({
          ...errorEmail,
          invalid: true,
        });
      } else {
        setErrorForEmail({
          blank: false,
          invalid: false,
        });
      }

      if (state.comment === '') {
        setErrorForComment(true);
      } else {
        setErrorForComment(false);
      }

      setCheckingInputs(false);
    }, 1100);

    if (state.name !== '' && state.comment !== '' && isEmail(state.email)) {
      return true;
    }

    return false;
  }

  function resetForm() {
    setState({
      name: '',
      email: '',
      comment: '',
    });
  }

  function sendEmail(e) {
    e.preventDefault();

    if (checkInputs()) {
      emailjs
        .sendForm(
          'service_i9b26wh',
          'template_ywk08vq',
          e.target,
          'user_ZAXv29kjr2dMbSkCO1CpC',
        )
        .then(
          function () {
            setTimeout(() => {
              setStatusOnFormSubmit('Thanks, your message has been sent!');
            }, 1100);

            resetForm();
            console.log('SUCCESS!');
          },
          function (error) {
            setTimeout(() => {
              setStatusOnFormSubmit('Oups, your message has not been sent!');
            }, 1100);
            console.log('FAILED...', error);
          },
        );
    } else {
      setTimeout(() => {
        setStatusOnFormSubmit(
          'Sorry, one or more fields have an error. Please check and try again.',
        );
      }, 1100);
      console.log('Errors in the form');
    }
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
          <div className={errorName ? 'form-group error' : 'form-group'}>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              id="name"
              value={state.name}
              onChange={handleChange}
              aria-describedby="namelHelp"
            />
            <FontAwesomeIcon icon="check-circle" />
            <FontAwesomeIcon icon="exclamation-circle" />
            <small className="error-message">
              {errorName && <> Name can't be blank</>}
            </small>
          </div>

          <div
            className={
              errorEmail.blank || errorEmail.invalid
                ? 'form-group error'
                : 'form-group'
            }
          >
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              id="email"
              value={state.email}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
            <FontAwesomeIcon icon="check-circle" />
            <FontAwesomeIcon icon="exclamation-circle" />
            <small className="error-message">
              {errorEmail.blank && <>Email can't be blank</>}
            </small>
            <small className="error-message">
              {errorEmail.invalid && <>The e-mail address entered is invalid</>}
            </small>
          </div>

          <div className={errorComment ? 'form-group error' : 'form-group'}>
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              id="comment"
              value={state.comment}
              onChange={handleChange}
              rows={4}
            />
            <FontAwesomeIcon icon="check-circle" />
            <FontAwesomeIcon icon="exclamation-circle" />
            <small className="error-message">
              {errorComment && <>Message can't be blank</>}
            </small>
          </div>

          <button type="submit" className="hello-btn w-100 border-0 mt-3">
            Send
            <span id="loader">
              {checkingInputs && <FontAwesomeIcon icon="spinner" />}
            </span>
          </button>
        </form>

        {(!checkingInputs && statusOnFormSubmit !== '') && (
          <div className="submit-status error" id="submitStatus">
            <p id="submitStatusText">{statusOnFormSubmit}</p>
          </div>
        )}
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
