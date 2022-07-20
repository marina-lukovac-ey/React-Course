## FRAGMENTS, PORTALS, REFS

- JSX Limitations & Fragments
- Getting a Cleaner DOM with Portals
- Working with Refs

### JSX LIMITATIONS & WORKAROUNDS:

- there should always be returned ONE ROOT JSX element
- JSX always translates to React.createElement('p',{},'This does work')
- Solution:
  1.  wrapping adjasent elements with a div..
  2.  custom component: Helpers Folder : similar as Card, but returns only props.children, and not the root element
  3.  native JS array... but elements need to have key
  4.  new Problem( div soup ) unnecessary, not a good practice for the SEO

### REACT FRAGMENTS:

- No need for making custom wrapper: use built-in react components
- or <></> , but this would not work in every project setup

```
return (
   <React.Fragment>
      <h2>hello</h2>
      <p>This does work</p>
   </React.Fragment>
);
```

### REACT PORTALS: GOOD PRACTICE...

- modal rendering on the page inside a div??
- Technically will work, but semantically... not ideal
- Modal is an overlay to the entire page, logically is above everything else... Screen reader will not see this as an overlay, but as something deeply structured inside the code...
- this is similar to styling a div as a button...
- Solution: keep writting the code in the given order, but: using Portals place it somewhere else

## **_You don't want error modal as a deeply nested element_**

**Instead: errorModal should be directly in the body**
(both errorModal and backdrop)

Applying Portals:

- place to port to
- let a component know it should have a portal to that place

```
{ReactDOM.createPortal(
        <Backdrop onConfirm={modalHandler} />,
        document.getElementById("backdrop-root")
      )}

```

what this portal does acctually is: it just places elements into real DOM to the position specified with second arguments

### REFs - Refferences

- For situations when a form is needed to be sent and it is not neccessary for state to track every keystroke of an input... if using useState(), you are creating controlled components

Set up a connection between HTML element rendered at the end and other JS code...

- useRef() hook returns value on the end of
- creating UNCONTROLED COMPONENTS, internal state is not controlled by the react
- typically with input elements, generally form stuff

```import useRef()
function App(){
   const nameInputRef= useRef( )
   const ageInputRef= useRef( )

   return
   <input ref={nameInputRef}/>
}
```

This error keeps reocurring:

Uncaught ReferenceError: process is not defined
at 4043 (<anonymous>:2:13168)
at r (<anonymous>:2:306599)
at 8048 (<anonymous>:2:9496)
at r (<anonymous>:2:306599)
at 8641 (<anonymous>:2:1379)
at r (<anonymous>:2:306599)
at <anonymous>:2:315627
at <anonymous>:2:324225
at <anonymous>:2:324229
at e.onload (index.js:1:1)
