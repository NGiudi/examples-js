import React, { useState, useEffect } from "react";

const initialValues = {
  job: "Programador",
  lastname: "Giudice",
  name: "Nicolás",
};

const FormExample = () => {
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [invalidFields] = useState(new Set());
  const [data, setData] = useState({
    job: initialValues.job,
    lastname: initialValues.lastname,
    name: initialValues.name,
  });

  const validField = (name, value) => {
    let valid;

    switch (name) {
      case "job":
      case "lastname":
      case "name":
        valid = value && value.trim() !== "";
        break;
      default:
        break;
    }

    if (valid) {
      invalidFields.delete(name);
    } else {
      invalidFields.add(name);
    }

    setDisabledSubmit(invalidFields.size !== 0);
  };

  const validateAllFields = () => {
    for (const property in data) {
      validField(property, data[property]);
    }
  };

  /* initial validation. */
  useEffect(() => {
    validateAllFields();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { name, value } = e.target;

    validField(name, value);

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <input
        defaultValue={data.name}
        name="name"
        onChange={handleChange}
        placeholder="Ingrese el nombre..."
        type="text"
      />

      <input
        defaultValue={data.lastname}
        name="lastname"
        onChange={handleChange}
        placeholder="Ingrese el apellido..."
        type="text"
      />

      <input
        defaultValue={data.job}
        name="job"
        onChange={handleChange}
        placeholder="Ingrese su trabajo..."
        type="text"
      />

      <input
        disabled={disabledSubmit}
        type="submit"
        value="Enviar Formulario"
      />
    </form>
  );
};

export default FormExample;
