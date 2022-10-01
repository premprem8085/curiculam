const Validate = (values) => {
  let errors = {};
  if (values?.username?.trim() === "") {
    errors.username = "username Required";
  }
  if (values?.email?.trim() === "") {
    errors.email = "email Required";
  } else if (!/\S+@\S+\.\S+/.test(values?.email)) {
    errors.email = "Email format must be as example@mail.com";
  }
  if (values?.password?.trim() === "") {
    errors.password = "password Required";
  } else if (values?.password?.length < 8) {
    errors.password = "password Must Enter 8";
  }
  if (values?.confirmPassword?.trim() === "") {
    errors.confirmPassword = "confirmPassword Required";
  } else if (values?.password !== values?.confirmPassword) {
    errors.confirmPassword = "Password Donot match";
  }
  return errors;
};

export default Validate;
