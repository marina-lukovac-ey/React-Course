# REACT BEHIND THE SCENES:

## HOW REACT REALLY WORKS?

> Library for building user interfaces.\
> ReactJS doesn't know anything about broser.\
> ReactDOM handles the real DOM==> bringing content to browser\

#### What React really matters is:

---

- Props / Communication Child <-> Parent
- State: internal data inside component
- Context: Component-wide data

#### How Component ==> RealDOM works?

---

1. React determines how the component tree currently looks like and what is should look like after : \
   - i.e: state update
   - context changes
   - props change
2. ReactDOM receives the differences : \
   - i.e: required changes == > and then **manipulates the real DOM**
   - enters **diffing algorythm** :
   - Virtual DOM Diffing: Finding out the differences between two snapshots of virtual DOM and only .then() ==> passing to the REAL DOM
3. Re-evaluating !== Re-Rendering the DOM

## COMPONENT UPDATES IN ACTION:

---

- i.e. toggle show paragraph

## CHILD COMPONENT RE-REVALUATION

---

**_For a child component to be re-evaluated it is enough for parent component to be re-evaluated..._**

## PREVENT UNNECESSARY RE-EVALUATIONS WITH `React.memo()`

---

- React is highly optimized for reexecutions...
- Can be declared to React that certain Components only reevaluate when certain props change
- `export default React.memo(DemoOputput)` // only for functional components...
- used if there is a huge component tree with state high above in the parent component
- not useful for small apps... can be effective for bigger apps
- Note: when props that are passed are objects and parent component rerenders, React.memo(DemoOutput) will not work as we want it...

> Solution in the useCalback()

## `useCalback()` AND ITS DEPENDENCES

---

- create a function that is the same through every rerender...
- what it acctually does: saves the declared function somewhere in it's internal storage, and use it wherever it is needed...

```
const toggleParagraph = useCallback( () => setShowParagraph(prev => !prev), [arrOfDepend] )
```

> Core explanation:\
> Functions are\
> **_[CLOSURES](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures): close over values that are available in their environment._**

- Allows to save a function so it can be reused

## SUMMARY

---

- SUM TOTAL : React returns JSX...
- Whenever state changes: Component is re-evaluated
- ReactDOM takes changes : and reapplies to the browser
- React.memo(ComponentFn) //
- `useCallback( () = > { ... } , [arrOfDependencies]);`
-

## CLOSER LOOK AT STATE & COMPONENTS

---

1. STATE MANAGEMENT: Everything comes down to state when it comes to rerendering
2. COMPONENT MANAGEMENT:

- Note: if child component is rendered conditionally, after state change, all of its current state is lost at the moment it is unmounted...

## UNDERSTAND STATE SCHEDULING AND BATCHING

---

- How react updates state management???
- setNewProduct('Book') == > **_SCHEDULED STATE UPDATE_** //feels immediate but isn't
- input field might have higher priority than text rendering...
- there is possibility for some state update to be postponed therefore
- because of this scheduling state updates, the best practice is to use `setNew(prev=> !prev)` form
- within useEffect can be used directly because:
  - useEffect's dependencies make sure that inside useEffect is always getting the freshest state snapshot
- **_BATCHING_** : when two setStates are called within a function handler... they are not taken separately and updated, but batched together and executed in a bundle...

### BATCH UPDATE DIGRESSION FROM COURSE:

---

[BATCHING](https://medium.com/swlh/react-state-batch-update-b1b61bd28cd2)

## OPTIMIZING WITH `useMemo()`dddddd

---

- used for sorting logic, so it doesn't have to be redone every time a parent component or props change... - changes only when dependencies do

```
useMemo( ( ) => { return logicResult//like sorting array },  [listOfDependences//i.e. search word] )
```
