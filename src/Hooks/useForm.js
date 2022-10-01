import { useState } from "react";
import Validate from "./Validate";

const useForm = () => {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [first, setfirst] = useState(false);

  const [error, seterror] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setvalues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
    seterror(Validate(values));
  };

  return { handleChange, values, handleSubmit, error };
};

export default useForm;
