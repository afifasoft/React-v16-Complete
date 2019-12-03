// 135

console.clear();
// People dropping of a form (Action creator)

const createPolicy = (name, amount) => {
  return {  // Action ( a form in our  analogy )
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};


const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
     payload: {
       name: name
     }
  };
};


const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};



function connect() {
	return function() {
  	return 'Hi, there'
  }
}

connect()()
