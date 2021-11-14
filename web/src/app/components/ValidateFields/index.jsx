export const validateEmail = (value) => {
  let errors;

  if (!value) {
    errors = "Required!";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors = "Invalid email address!";
  }

  return errors;
};

export const validatePassword = (value) => {
  let errors;

  if (!value) {
    errors = "Required!";
  } else if (value.length <= 8) {
    errors = "Password must be at least 8 characters";
  } else if (!/[0-9]/g.test(value)) {
    errors = "Password must contain at least 1 digit";
  } else if (!/[a-z]/g.test(value)) {
    errors = "Password must contain at least 1 lower case letter";
  } else if (!/[A-Z]/g.test(value)) {
    errors = "Password must contain at least 1 upper case letter";
  }

  return errors;
};

export const isRequired = (value) => (value ? "Required!" : "");