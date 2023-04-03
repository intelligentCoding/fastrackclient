import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  code: yup.string().required("Code is required"),
});