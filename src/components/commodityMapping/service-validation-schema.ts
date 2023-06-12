import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  mappedFrom: yup.string().required('mappedFrom is required'),
  mappedTo: yup.string().required('mappedTo is required'),
});
