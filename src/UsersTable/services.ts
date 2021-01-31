import { api } from 'api';

import { GetUsers } from './types';

export const getUsers: GetUsers = () => api.get('/users');
