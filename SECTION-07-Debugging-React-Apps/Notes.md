### DEBUGGING ANDD ERRORS:

1. Understanding Error Messages
2. Debugging & Analyzing React Apps
3. Using the React DevTools

## UNDERSTANDING ERROR MESSAGES:

- Typos
- Wrong Pointers to a function
- Missing Pointers to a function
- unwrapped siblings directly in the JSX

## SOP:

- READ THE ERROR: Go to the line of code where problem was generated, to the line of code...
- Follow the chain of events

### Using breaking points:

---

1. In the sources tab: Find a function call that problem could be starting with
2. Create a breaking point on that line.
3. Perform an action to test it...
4. go step by step: Check out Call Stack ...

### React Dev Tools :

---

1.  Components
    > Available fields:
        - props
            - children
            - type
            - new entry
        - rendered by
            -all the components to the root element
        - source
            - CourseInput.js:34
        - hooks:
            - state
            -...
2.  Profiler
    >
