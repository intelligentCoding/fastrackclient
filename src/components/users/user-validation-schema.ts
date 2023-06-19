import * as yup from 'yup';

export const userServiceValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  firstName: yup.string().required("FirstName is required"),
  lastName: yup.string().required("LastName is required"),
  // role: yup.string().required("Role is required"),
  role: yup.object().shape({
    name: yup.string().required('Missing Role-info'),
    value: yup.string().required('Missing Role-info')
}).required("Role is required").nullable(),
});