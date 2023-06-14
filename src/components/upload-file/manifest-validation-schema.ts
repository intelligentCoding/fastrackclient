import * as yup from 'yup';

export const manifestValidationSchema = yup.object().shape({
  paidTo: yup
    .object()
    .shape({
      name: yup.string().required('Missing Paid to info'),
      value: yup.string().required('Missing Paid to info'),
    })
    .required('Paid to is required')
    .nullable(),
  customer: yup
    .object()
    .shape({
      name: yup.string().required('Missing customer'),
      value: yup.string().required('Missing customer'),
    })
    .required('customer is required')
    .nullable(),
  airport: yup
    .object()
    .shape({
      name: yup.string().required('Missing air port'),
      value: yup.string().required('Missing air port'),
    })
    .required('airport is required')
    .nullable(),
  bags: yup.number().required('bags are required'),
});
