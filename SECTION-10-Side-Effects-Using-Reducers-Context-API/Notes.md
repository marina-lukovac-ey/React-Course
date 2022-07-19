## EFFECTS, REDUCERS & CONTEXT

### Working with Side Effects

- Managing more complex State with Reducers
- Managing App-Wide or Component-wide State with Context

### SIDE EFFECTS...

### React's main functionality...

Render UI
Manage User Input
Re-evaluate Components and Manipulate components

### Everything else are side effects

e.g:

- sending http request
- storing something in a browser storage
- set and manage timers

> All of this is outside normal component evaluation and render cycle
> They might block - delay rendering...

> useEffect() hook
> executed upon every component evaluation IF the specified dependencies changed

```
useEffect(()=>{}, [dependences]);
```

App : no real Authentication logic
// whenever script starts, check if the data has persisted, and if data stored is correct login automatically
using localStorage... find it in developer tools: application/ local storage / key value pairs...

```
localStorage.setItem('isLoggedIn','1'); //browser's built-in object set it when logging in
//and whenever  a page is reloaded, check if
localStorage.getItem('isLoggedIn');
//remove on logout
localStorage.removeItem('isLoggedIn');
```

useEffect(fn,[dependencies])
is run for the first time when a component updated

1. if array of dependencies is empty:

   > is run for the first time when a component started
   > after that, since there is no dependencies, useEffect is done executing

2. if there is an element of dependency array

   > every time a dependency is changed a useEffect is run

3. when there is no array of dependencies:
   > useEffect is being executed every time anything in the component changes as long as the first time.
4. having multiple useEffects in one component

setState functions can be omitted because it is already defined by the react to never change...

every keystroke of updating form input data is considered a side effect because it is a reply to a user interaction

## ADD ALL TO THE dependency array, except

That is correct, but there are a few exceptions you should be aware of:

You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

### In this example:

---

````
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {

  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timerDuration } = props; // using destructuring to pull out specific props values

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change
````

## 18.07.2022. 16:00

---

> THE EXACT MOMENT WHEN WE FOUND OUT HOW A CHAIR IS CUSTOMIZABLE
> After a mini coffee-break
> The first problem solved as a team...

### CLEANUP FUNCTION...

e.g.
wait a certain amount of time when pausing typing until some action is performed, not uppon every keystroke

**_Def: Cleanup function is executed every time before a next useEffect is about to be executed..._**

> except a first time a useEffect runs
> every other time, before the next useEffect as long as before unmounting component...

### USEREDUCER

**_used for more complexed state_**
useReducer()
alternative to useState() when useState is not enough...

when there is multiple state for the same input
e.g:
inputEmail
emailIsValid
useReducer always returns array of two elements

```
const [state,dispatch]= useReducer(reducerFn, initialState,initFn)
```

1. State- The state snapshot used in the component re-render/re-evaluation
2. DispatchFn - A function that can be used to dispatch a new action(i. e trigger an update of the state)
3. ReducerFn - A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state `(prev, action) => new`
4. initialState - The initial state
5. initFn - a function to set the initial state programmatically

#### i.e: combining the enteredEmai and emailIsValid into single state...

---

Reducer function can be declared completely outside the component function... React does the passing and calling the function on dispatched action

```
const emailReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value: action.payload,isValid: action.payload.includes('@')}
  }
  if(action.type ==='USER_BLUR'){ //check if state.value is valid
    return { value: state.value, isValid: state.value.includes('@') }
  }
}
const passwordReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value: action.payload,isValid: action.payload.trim().length >6}
  }
  if(action.type ==='USER_BLUR'){ //check if state.value is valid
    return { value: state.value, isValid: state.valuetrim().length >6}
  }
}

function Login(){

  const [emailState,dispatchEmail]=useReducer(emailReducer, {value:'',isValid:false})

  //call dispatch somewhere
  const emailHandler =(e)=>{
    dispatchEmail({type: 'USER_INPUT', payload: e.target.value})
  }
  //call dispatch for the second action...
  const validateEmailHandler =()=>{
    dispatchEmail({type: 'USER_BLUR'}) //no need for payload
  }
}
```

### Adding Nested Properties of a STATE As Dependencies To useEffect

---

```
const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);
```

### USE REDUCER VS. USE STATE...

---

### useState()

---

> useState ===> main state management system\
> independent pieces of state/data\
> great if state updates are easy and limited to a few kinds of updates

### useReducer()

---

> great if you need more power, with previous state snapshots
> related state of data if you have related pieces of state/data
> can be helpful if there is a more complex state updates

## REACT CONTEXT:

---

**_Only use it when passing through multiple components_**

> when there is a lot of passing props throughout the application\
>
> - create new folder inside components folder: state, store, context\
> - add file that is holding i.e the authentication state

```
const AuthContext = React.createContext({isLoggedIn: false});
```

this function returns object that will contain component...
//provide to ===> all components that should listen to the context
//listen to ===> from all components that need access to that context

## 1. using Context.Provider - Context.Consumer

---

### Context Providing with react context:

---

`<AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>` // on every change of isLoggedIn state, isLoggedIn on a AuthContext is changed so... data is up to date

### Consumer accessing with react context

---

```
<AuthContext.Consumer>
  {ctx => <component>ctx.isLoggedIn</component>}
```

is a component that wraps component that needs to listen to the provided context

## 2. using useContext() hook

---

> do the <AuthContext.Provider> part
> in the component where neccessary:

```
const ctx = useContext(AuthContext);
```

### MAX APPROACH OF ELEVATING CONTEXT TO index.js

---

**_Pro tip: always lean and clean App.js_**\
index.js\

```
<AuthContextProvider>
    <App />
  </AuthContextProvider>
```

App.js\

```
function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}
```

### CONTEXT LIMITATIONS:

> somewhere props for configuration\
> React Context is NOT optimized for high frequency changes!\
> should not be used for replacing ALL components communications and props

## RULES OF HOOKS:

---

1. Only call React Hooks in React Functions:

- React Component Functions
- Custom Hooks
  \

2. Only call React Hooks at the Top Level:

- don't call React Hooks in nested functions
- don't call React Hooks in any block statements

3. useEffect():

- make sure to add everything you refer to as a dependency!

### REFACTORING INPUT ELEMENT, so it receives all through props:

---
