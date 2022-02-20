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
    .required("Obrigatório")
    .min(4, "O nome deve ter pelo menos 4 caracteres"),
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  phone: Yup.string()
  .required("Obrigatório")
  .min(8, "O nome deve ter pelo menos 8 caracteres"),
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