export const enteredNameIsValid = (name) => {
  return name.trim();
};

export const enteredEmailIsValid = (email) => {
  return email
    .trim()
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//const enteredEmailIsValid = /\S+@\S+\.\S+/.test(enteredEmail);
