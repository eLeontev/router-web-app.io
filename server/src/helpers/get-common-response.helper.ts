import { CommonResponse } from '../models/common.models';

export const getCommonResponse = (error?: string): CommonResponse => ({
    error,
    isSuccess: !error,
});
