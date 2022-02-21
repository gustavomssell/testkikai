import React from 'react'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Modal } from '../../../Components/Modal'
import { SupporterContext } from '../../../Context/SupporterContext';
import { useContext } from 'react';
import { Button, FormBox, InputMaskText, InputText } from './styles';
 
const initialValues = {
  name:"",
  email:"",
  phone:"",
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(4, "The name must be at least 4 characters long"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
  .required("Required")
  .min(8, "The phone must be at least 8 characters long"),
});

export const ModalCreateSupporter = ({open, setOpen}) => {
  const {CreateSupporter} = useContext(SupporterContext);

  const onClose =()=>{
    setOpen(false)
  }

  const submit = (values, { setSubmitting }) => {
   CreateSupporter(values)
   setSubmitting(false)
   onClose()
  }

  return (
    <Modal openModal={open} onClose={onClose} title="Register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {(props) => <Forms {...props} />}
      </Formik>
    </Modal>
  )
}

const Forms = (props) => {
  const {
    values: {
      name,
      email,
      phone,
    },
    isSubmitting,
    setFieldValue,
    handleSubmit,
  } = props;
  return (
 <FormBox onSubmit={handleSubmit} noValidate  >
  <InputText placeholder="Name" id="name" name="name" type="text" value={name}></InputText>
   <ErrorMessage name="name"/>
  <InputText placeholder="E-mail" id="email" name="email" type="email" value={email}></InputText>
  <ErrorMessage name="email"/>
  <InputMaskText  placeholder="Phone"  id="phone" name="phone" type="text" mask='(99) 9999 9999' value={phone}
  onChange={(e) => setFieldValue("phone", e.target.value)}></InputMaskText >
   <ErrorMessage name="phone"/>
  <Button type="submit" disabled={isSubmitting}> OK</Button>
 </FormBox>)
}