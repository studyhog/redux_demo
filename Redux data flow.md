# Strict unidirectional data flow.

## Data lifecycle in Redux:
1. Call `store.dispatch(action)`.
   Can be called from anywhere in the app, including components and XHR callbacks, or even at scheduled intervals
    * action - plain object describing what happened:
      { type: 'LIKE_ARTICLE', articleId: 42 }
      { type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' } }
      { type: 'ADD_TODO', text: 'Follow along Redux tutorial' }
     (action can be thought of as a brief snippet of news - i.e. "Mary liked article 42")
     
2. Redux store calls the reducer function you gave it. Store will pass two arguments (current state, and the action).
   Reducer is a *pure* function, it must only compute the next state. Calling it with the same inputs repeatedly, should always produce the same output.
   Root reducer may combine output of multiple reducers into a single state tree (`combineReducers`).

3. Redux store saves the complete state tree returned by the root reducer.
   All the listeners registered with `store.subscribe(listener)` will be invoked.
   Listeners may call `store.getState()` to get the current state.
   UI can be updated to reflect the new state. If you're using React Redux, this is when `component.setState(newState)` is called.