import * as yup from 'yup';

// UldNumber: string,
// totalPieces: number,
// losePieces: number,
// instructions: string,
// isPure: boolean,
export const uldValidationSchema = yup.object().shape({
  UldNumber: yup.string().required('Uld Number is required'),
  totalPieces: yup.number().required('Total Pieces is required'),
  losePieces: yup.number().required('Loose Pieces is required'),
  instructions: yup.string().required('instructions is required'),
  isPure: yup.boolean().required('Is pure is required'),
});
