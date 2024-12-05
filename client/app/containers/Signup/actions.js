/*
 *
 * Signup actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_SUBMITTING,
  SUBSCRIBE_CHANGE,
  SET_SIGNUP_FORM_ERRORS
} from './constants';

import { setAuth } from '../Authentication/actions';
import setToken from '../../utils/token';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

export const signupChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData
  };
};

export const subscribeChange = () => {
  return {
    type: SUBSCRIBE_CHANGE
  };
};

export const signUp = () => {
  return async (dispatch, getState) => {
    try {
      const rules = {
        email: 'required|email',
        password: 'required|min:6',
        firstName: 'required',
        lastName: 'required'
      };

      const newUser = getState().signup.signupFormData;
      const isSubscribed = getState().signup.isSubscribed;

      const { isValid, errors } = allFieldsValidation(newUser, rules, {
        'required.email': 'Email is required.',
        'required.password': 'Password is required.',
        'required.firstName': 'First Name is required.',
        'required.lastName': 'Last Name is required.'
      });

      if (!isValid) {
        return dispatch({ type: SET_SIGNUP_FORM_ERRORS, payload: errors });
      }

      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: true });
      dispatch({ type: SET_SIGNUP_LOADING, payload: true });

      const user = {
        isSubscribed,
        ...newUser
      };

      const response = await axios.post(`${API_URL}/auth/register`, user);

      const successfulOptions = {
        title: `You have signed up successfully! You will be receiving an email as well. Thank you!`,
        position: 'tr',
        autoDismiss: 1
      };

      localStorage.setItem('token', response.data.token);

      setToken(response.data.token);

      dispatch(setAuth());
      dispatch(success(successfulOptions));

            // Send the email notification after successful sign up
      await sendEmailNotification(newUser.email, newUser.firstName);
      dispatch({ type: SIGNUP_RESET });
    } catch (error) {
      const title = `Please try to signup again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: false });
      dispatch({ type: SET_SIGNUP_LOADING, payload: false });
    }
  };
};

// Function to send email notification after signup
async function sendEmailNotification(email, firstName) {
  const emailAPI = `https://s1cn6nxa1b.execute-api.us-east-1.amazonaws.com/dev/email`;  // Adjust to the correct endpoint

  const emailData = {
    email: email,
    subject: "Welcome to Our Platform!",
    message: `Hello ${firstName},\n\nThank you for signing up! We're excited to have you on board.`
  };

  try {
    const response = await axios.post(emailAPI, emailData);

    if (response.status === 200) {
      console.log("Email sent successfully");
    } else {
      console.error("Failed to send email:", response.data.error || "Unknown error");
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
