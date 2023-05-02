import * as yup from 'yup';

export const manifestValidationSchema = yup.object().shape({
    bags: yup.string().required("bags is required"),
    weight: yup.string().required("weight is required"),
    paidTo: yup.object().shape({
        name: yup.string().required('Missing Paid to info'),
        value: yup.string().required('Missing Paid to info')
    }).required("Paid to is required").nullable(),
    date: yup.date().required("date is required"),
    customer: yup.object().shape({
        name: yup.string().required('Missing Paid to info'),
        value: yup.string().required('Missing Paid to info')
    }).required("customer is required").nullable(),
    airport: yup.object().shape({
        name: yup.string().required('Missing Paid to info'),
        value: yup.string().required('Missing Paid to info')
    }).required("airport is required").nullable(),
    broker: yup.object().shape({
        name: yup.string().required('Missing Paid to info'),
        value: yup.string().required('Missing Paid to info')
    }).required("broker is required").nullable(),
    service: yup.object().shape({
        name: yup.string().required('Missing Paid to info'),
        value: yup.string().required('Missing Paid to info')
    }).required("service is required").nullable(),
});