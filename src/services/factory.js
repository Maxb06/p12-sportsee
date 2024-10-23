import { apiService } from './apiService';
import { mockService } from './mockService';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const dataFactory = useMock ? mockService : apiService;
