import { HttpClient } from './http-client';
import { API_ENDPOINTS } from './api-endpoints';
import { getManifestFile } from '@/types';

export const uploadClient = {
  upload: async (variables: any) => {
    let formData = new FormData();
    //we will run loop in case multiple files files
    variables?.acceptedFiles.map((variable: any) => {
      formData.append('file', variable);
    });
    const options = {
      headers: {
        'Content-Type':
          'multipart/form-data; boundary=<calculated when request is sent>',
      },
    };
    return HttpClient.post(
      variables.isExpress
        ? API_ENDPOINTS.FILE_UPLOAD_EXPRESS
        : API_ENDPOINTS.FILE_UPLOAD,
      formData,
      options,
    );
  },
};
export const getFile = {
  getList: async () => {
    return HttpClient.get<getManifestFile[]>(API_ENDPOINTS.FILE_UPLOAD);
  },
};
