export default store => next => action => {
  console.log('__ACTION__', action);

//Note, we are using currying in the above, which is essentially breaking down a function that takes multiple arguments into separate functions that return a single argument (and pass into each other)//

  try {
    let result = next(action);
    console.log('__REPORTER_STATE__', store.getState());
    console.log('__REPORTER_STORE__', store);
    return result;
  } catch(e) {
    e.action = action;
    console.error('__ERROR__', e);
    return e;
  }
};
