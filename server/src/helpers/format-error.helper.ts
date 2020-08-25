import { GraphQLError } from 'graphql';
import { CommonResponse } from '../models/common.models';

export const formatError = ({ message }: GraphQLError): CommonResponse => ({
    error: message,
    isSuccess: false,
});
