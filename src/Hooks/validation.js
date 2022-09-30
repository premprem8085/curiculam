export default validation = (values) => {
  let errors = {};
  if ((!values.username).trim()) {
    errors.username = "username Required";
  }
  if ((!values.email).trim()) {
    errors.email = "email Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email format must be as example@mail.com";
  }
  if ((!values.email).trim()) {
    errors.password = "password Required";
  } else if ((!values.email).length >= 8) {
    errors.password = "password Must Enter 8";
  }
};
