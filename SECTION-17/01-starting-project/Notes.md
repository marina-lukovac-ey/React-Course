# HANDLING USER INPUT AND FORMS:

- Values
- Validation
- State

## WHAT IS COMPLEX:

- Valid and invalid states, both apply to individual input and form overall

1. When Input is INVALID
   - When input is invalid- there is a neccessity for input-specific error messages & highlighting problematic inputs
   - Ensure form can't be submited/saved if inputs are invalid
2. . When Input is VALID

   - Allow form to be submitted/saved

3. When TO VALIDATE

   - When form is SUBMITTED? //avoiding unnecessary warnings but 'too late' feedback
   - When input is LOSING FOCUS //kind of //ok very usefull for untouched forms
   - On every keystroke // to cumbersome all the mistakes. BUT when combined with other approaches, gives the best result...

## HANDLING INPUT AND FORMS:

- Max approaches: Use them together...

1. useRef and useState(reset values) for useRef(do validation on lose focus) together
2. Validation feedback with inputValueIsValid state

> My mini conclusion: when I have need for a form data to be saved if accidentally presing something, useState\
> Otherwise, when there is a need for validation only after losing focus...

```
//when submitting a form, not ideal for reseting input value:
nameInputRef.current.value = "";
//instead leave that to React:
setEnteredValue('');
```

### OVERALL FORM VALIDITY...

- As soon as 1 form input is invalid... it is invalid too...

## SIMPLIFYING:

#### ADDITIONAL READ

---

    "So what should not go into your JavaScript code?

    Anything which gives other users access to any of your accounts. Any customer data (hardcoding customer data is never a great idea by the way...) and in general: Any confidential data.

    That's also the reason why you'll never directly connect to a database from your frontend JavaScript code. And Firebase isn't a database in case you're wondering. It's a backend service which you still access through an API (or a SDK that accesses it for you)."
    "Minification doesn't solve security issues, it only does the JS code's size decreased..."
    "Secure API keys and DB credentials"

Taken from: **_[Hide JavaScript Code](https://academind.com/tutorials/hide-javascript-code)_**

---
