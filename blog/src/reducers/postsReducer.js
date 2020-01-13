// 176

export default (state = [], action) => {

  switch (action.type) {
    case 'FETCH_POSTS' :
      return action.payload;

    default:
      return state;
  }

};



/*
// inside reducers
// bad !
state[0] = 'Sam';
state.pop();
state.push();

// bad !
state.name = 'Sam';
state.age = 30;

*/



// bad !
// return document.querySelector('input')

// bad !
// return axios.get('/posts')

// good
// return state + action


// inside reducers
// Good

// state.filter(element => element !== 'hi')   // Removing an element from an array
// [...state, 'hi']   // Adding an element to an array
// state.map(el => el === 'hi' ? 'bye' : el) // Replacing an element in an array


// {...state, name: 'Sam'} // Updating a property in an object
// {...state, age: 30} // Adding a property to an object
// {...state, age: undefined} // Removing a property from an object
// _.omit(state, 'age')




// const colors = ['red', 'green'];
// [...colors, 'blue'] === colors // false

// [...colors, 'blue'] // create new brand array it will not modify original array



 // const colors = ['red', 'green'];
 // colors.filter(color => color !== 'green') // Removing green - it will return brand new array

 // but still have unmutaed array colors
//  colors.filter(color => color !== 'green') === colors // false





// const profile = {name : 'Sam'};
// { ...profile, name: 'Alex'}  // Updating a property in an object
// { ...profile, age: 30} // Adding a property to an object

// { ...profile, name: undefined}; // Removing a property from an object
// _.omit(profile, 'name') // lodash liberary
