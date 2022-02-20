import React from 'react'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Modal } from '../../../Components/Modal'
import { SupporterContext } from '../../../Context/SupporterContext';
import { useContext } from 'react';
import { Button, DeleteButton, FormBox, InputMaskText, InputText } from './styles';
import {Delete} from '@styled-icons/fluentui-system-filled'


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Obrigatório")
    .min(4, "O nome deve ter pelo menos 4 caracteres"),
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  phone: Yup.string()
  .required("Obrigatório")
  .min(8, "O nome deve ter pelo menos 8 caracteres"),
});

export const ModalEditSupporter = ({open, setOpen, id}) => {
  const {UpdateSupporter, DeleteSupporter, supporter} = useContext(SupporterContext);
  const init = supporter[id]

  const onClose =()=>{
    setOpen({active: false, id: null})
  }

  const onCloseDelete =(id)=>{
    DeleteSupporter(id)
    setOpen({active: false, id: null})
  }

  const submit = (values, { setSubmitting }) => {
    UpdateSupporter(id, values)
    setSubmitting(false)
    onClose()
  }

  return (
    <Modal openModal={open} onClose={onClose} title="Edit">
      <DeleteButton onClick={()=> onCloseDelete(id)}>
        <Delete/>
      </DeleteButton>
      <Formik
        initialValues={init}
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