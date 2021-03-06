import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
  } from './types';

export const signIn = (userId) => {

  return {
    type: SIGN_IN,
    payload: userId
  };

};

export const signOut = () => {

  return {
    type: SIGN_OUT
  };

};

// inner function
export const createStream = formValues =>  async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {

  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });

};

export const fetchStream = (id) => async (dispatch) => {

  const response = await streams.get(`/streams/${id}`);  // ES2015 syntax
  dispatch({ type: FETCH_STREAM, payload: response.data });

};

export const editStream = (id, formValues) => async (dispatch) => {

//  const response = await streams.put(`/streams/${id}`,formValues); // body of the request we will specify formValues and it will Update ALL properties of a record
  const response = await streams.patch(`/streams/${id}`, formValues); // It will update SOME properties of a record
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');

};

export const deleteStream = (id) => async (dispatch) => {

  await streams.delete(`/streams/${id}`);           // nothing is returning
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');

};
