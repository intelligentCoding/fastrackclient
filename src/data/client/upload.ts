import { HttpClient } from './http-client';
import { API_ENDPOINTS } from './api-endpoints';
import { Attachment } from '@/types';

export const uploadClient = {
  upload: async (variables: any) => {
    let formData = new FormData();
    //we will run loop in case multiple files files
    variables.map((variable: any) => {
      formData.append('file', variable);
    })
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
      },
    };
    return HttpClient.post(
      API_ENDPOINTS.FILE_UPLOAD,
      formData,
      options
    );
  },
};
