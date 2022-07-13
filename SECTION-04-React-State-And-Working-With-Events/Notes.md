### ADDING HANDLER-FUNCTION ON EVENTS:

### In this project, state is set within the smallest component, where data are being shown

### When state is updated

---

- Data is REEVALUATED AND REDRAWN ON THE SCREEN
- If state is changed, component function is running again

#### `useState()` main Reack hook

---

- Returns array, first element is point to a managed value
- second element is a function that manages state value
- Cannot be called outside component functions,
- Cannot be called inside nested functions
- There is an exception: -

SUM TOTAL:

1. register useState(value)
2. it always returns array with two arguments:
3. destructure it [managed value, setterStateFunction]
4. update with setterStateFunction
5. function component reexecutes and there is a new state value
   - React re-executes component function and re-evaluates JSX code therefore;

**_ Pro tip: _**

```
const clickHandler = () => {
    setTitle("Changed title");
    console.log(title); //this is not changed value because the function didn't reexecute before this came to exectuion
  };
```

### FORM INPUTS:

> When adding event listener, eventHandler function automatically gets Event object that describes event at stake

??? Why is the console.log(enteredValue) showing it twice, react devtools backend.js: 402 ///Solution Strict.Mode

### TASK: FIND A BETTER WAY TO SEND SOMETHING TO INPUT TYPE = 'DATE'

```
  const today = new Date().toISOString().slice(0, 10); //is there any better way???
```

### MULTIPLE STATE SLICES: //more often

---

```
 const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(today);
```

**_AND THE ALTERNATIVE_**

```
const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: today,
  });

//with new syntax: when setting new state ==> actually mine is better:

{
  ...userInput,
  title: event.target.value //overriding the value of a property
}
```

### UPDATE STATE THAT DEPENDS OF THE PREVIOUS CASES: NICHE CASES WOULDN'T WORK IN THE PREVIOUS SITUATION...

```
//mine:
setUserInput(prev => {...prev,title: e.target.value});
```

#### Form submission:

> `onSubmit ={submitHandler}` is to be listened to on the `<form>`

### Child-to-Parent Component Communication (Bottom-up) !!!! GE - NI - O - US !!!!

---

\*\*This acctually is the definition of the setArrayState(prev=>...) just pass the setArrayState

- Create custom eventHandler props,
- Expect functions as values
- Pass a function from a parent component to child component
- Pass data to that function from a parent component

### What Max acctually did:

Defined Callbacks within the Apps higher in the dom tree...
passed them to children by attributes `onSomeChange={handler function}`

### KEY CONCEPT: ====>>>> LIFTING STATE UP: ??? To return to... previous video too...

> Only communication in the react app:

1. from parent to child by passing data through {props}
2. from child to parent through passing functions "Lifting the State Up"

**Pro tip: <App/> is not always the one to be Lifting the state up.**

### ??? Naming those handlerEvent functions SPECIFICATION

### Two-way binding: CREATED CONTROLLED COMPONENT:

---

> DEF: Controlled component is the one that the same value is passed to and gotten from...
> Logic is not handled in a current component but from the parent component

```
<select value={selected} onChange={yearSelectHandler}>
```

### PRESENTATIONAL VS. STATEFUL COMPONENTS (dumb vs. smart)

---

> in all React apps there is a couple of components that use state
