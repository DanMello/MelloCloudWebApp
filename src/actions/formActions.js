import store from '../store'
import { userVerified } from './userActions'

let url = store.getState().config.url

export function loader() {

  return {
    type: "FORM_LOADING"
  }
}

export function error(error) {

  return {
    type: "FORM_SUBMIT_ERROR",
    payload: error
  }
}

function querySuccess(query) {

  return {
    type: "FORM_QUERY_SUCCESS",
    payload: {
      property: query.property,
      success: query.success,
      queryDone: true
    }
  }
}

function queryError(query) {

  return {
    type: "FORM_QUERY_ERROR",
    payload: {
      property: query.property,
      error: query.error,
      queryDone: true
    }
  }
}

export function checkEmail(input, meta) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        email: input
      },
      url: url + '/account/signup/emailCheck'
    },
    meta: {
      cancelable: meta.cancelable,
      property: 'email'
    },
    loader: loader,
    error: queryError,
    success: querySuccess
  }
}

export function login (user) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: user,
      url: url + '/account/login'
    },
    loader: loader,
    error: error,
    success: userVerified
  }
}

export function signup (user) {

  return {
    type: "FETCH",
    payload: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: user,
      url: url + '/account/signup'
    },
    loader: loader,
    error: error,
    success: userVerified
  }
}