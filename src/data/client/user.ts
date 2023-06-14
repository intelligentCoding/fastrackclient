import { AuthResponse, LoginInput, User, UpdateUser } from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

export const userClient = {
  login: (variables: LoginInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.LOGIN, variables);
  },
  logout: () => {
    return HttpClient.post<any>(API_ENDPOINTS.LOGOUT, {});
  },
  update: ({ id, input }: { id: string; input: UpdateUser }) => {
    return HttpClient.put<User>(`${API_ENDPOINTS.USERS}/${id}`, input);
  },
};
