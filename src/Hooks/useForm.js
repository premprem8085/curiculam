import React, { useState } from "react";

const useForm = () => {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
  return { handleChange, values };
};

export default useForm;
