import React from "react";
import { Form, Formik } from "formik";
import { INITIAL_VALUES, validateForm } from "./manageFormDonations";
import { TellUsAboutYourself } from "../../molecules/TellAboutYourSelf/TellAboutYourSelf";
import { WhatMotivatesYou } from "../../molecules/WhatMotivatesYou/WhatMotivatesYou";
import "./FormDonations.scss";

export const FormDonations = (props) => {
  const { cuentanosDeTi, queTeMotiva } = props;

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);

    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        console.log("envioFormulario");
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <TellUsAboutYourself {...cuentanosDeTi} />
        <WhatMotivatesYou {...queTeMotiva} />
      </Form>
    </Formik>
  );
};
