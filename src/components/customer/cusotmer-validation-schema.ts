import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('email is required'),
  clearanceFee: yup.number().required('clearanceFee is required'),
  airlineFee: yup.number().required('airlineFee is required'),
  airwayBillPerPcs: yup.number().required('airwayBillPerPcs is required'),
  fteHandlingFee: yup.number().required('fteHandlingFee is required'),
  cfsRecoveryCharges: yup.number().required('cfsRecoveryCharges is required'),
  fteMinWeight: yup.number().required('fteMinWeight is required'),
  fteMinCharge: yup.number().required('fteMinCharge is required'),
  cfsMinWeight: yup.number().required('cfsMinWeight is required'),
  cfsMinCharge: yup.number().required('cfsMinCharge is required'),
  // service: yup.object().shape({
  //   name: yup.string().required('Service Code is required'),
  //   id: yup.string().required('Service Id is required')
  // }),
});
