const validateData = (name, age) => {
  let tempAge = age.trim();
  let tempName = age.trim();
  if (!tempName.length || !tempAge.length) {
    return {
      pass: false,
      message: "Please enter a valid name and age (non-empty values)",
    };
  } else if (+tempAge <= 0) {
    return { pass: false, message: "Please enter a valid age (>0)" };
  } else {
    return { pass: true, message: "" };
  }
};

export { validateData };
