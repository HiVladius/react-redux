import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setformValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  //? isFormValid es una variable que se calcula cada vez que se actualiza
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
  }, [formValidation]);

  //? onInputChange es una función que se ejecuta cada vez que se actualiza
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //? onResetForm es una función que se ejecuta cada vez que se actualiza
  const onResetForm = () => {
    setFormState(initialForm);
  };

  //?createValidators es una función que se ejecuta cada vez que
  //? se actualiza el formulario

  const createValidators = () => {
    const formCheckValius = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckValius[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setformValidation(formCheckValius);
    // console.log(formCheckValius);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};
