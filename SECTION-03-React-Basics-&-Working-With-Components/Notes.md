### REACT CORE SYNTAX & JSX

### WORKING WITH COMPONENTS

### WORKING WITH DATA

### COMPONENT: Core concept, all UI are created from/of components

- Reusability // DRY
- Separation of Concerns

### DECLARATIVE APPROACH:

> defining desired end state... React does DOM manipulations

### index.js is the file first executed...

---

> downloaded: ReactDOM object from react-dom library...
> createRoot(tells where all the jsx code should be inserted)
> that is stored into root variable
> import App from './App'
> root.render(<App/>)

### function App ==> export default App

---

1. Create Component
2. Export it
3. Import where it is used
4. Use

### PASSING DATA THROUGH ATTRIBUTES: PROPS

---

> Passed within the component, destructure props object: ({title,amount,date,price })

```
dateObject.toLocaleString('en-US,{month:'long'});
dateObject.toLocaleString('en-US,{day: '2-digit'});
```

### THE CONCEPT OF "COMPOSITION" (children props)

---

> Shell components used only for styling are only needed one thing in order to work:

        ```
        function Shell (props){
            classes = `card ${props.className}` //key step if you want to use className added to wrapper from another stylesheet
            return <div>{props.children}</div>
        }
        ```

# BLOCKER:

- CARD COMPONENT: classes = `card ${props.className}` //Compositions feature
- Using Shell components makes composition a log better

### COMPONENT - DRIVEN USER INTERFACES:

    - React Core Syntax & JSX
    - Working with Components
    - Working With Data

> SUM TOTAL:

        - just splitting code into multiple components
        - in the end it is rendered as classic:

### JSX translated: Under the hood syntax

---

```
return React.createElement(
  'div',
  {},
  React.createElement('h2',{},"Let's get started!")), //1st element, 2nd props object, 3rd between tag content
  React.createElement(Expenses, {items: expenses})
);
```

### ORGANIZING FILES AND FOLDERS: take care of routes when changing placement of components

---

> Subfolders:

    General Components
    Feature Components

### AN ALTERNATIVE FUNCTION SYNTAX:

---

```
const App = ()=>{
    return
}
export default App;
```
