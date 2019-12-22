export default (state, action) => {
  return 123; 
};




// bad !
// return document.querySelector('input')

// bad !
// return axios.get('/posts')

// good
// return state + action
