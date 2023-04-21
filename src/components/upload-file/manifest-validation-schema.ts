import * as yup from 'yup';

export const manifestValidationSchema = yup.object().shape({
    bags: yup.string().required("bags is required"),
    weight: yup.string().required("weight is required"),
    // paidTo: yup.string().required("paidTo is required"),
    // date: yup.string().required("date is required"),
    // customer: yup.string().required("customer is required"),
    // airport: yup.string().required("airport is required"),
    // broker: yup.string().required("broker is required"),
    // service: yup.string().required("service is required"),
});