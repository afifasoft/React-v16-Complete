import jsonPlaceholder  from '../apis/jsonPlaceholder';

// function return a function
export const fetchPosts = () => async dispatch => {

    const response =  await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response})

};

// export const fetchPosts = () => {
// return async function(dispatch, getState) {
//  const response = await jsonPlaceholder.get('/posts');
//  dispatch({ type: 'FETCH_POSTS', payload: response });
// }

// };
