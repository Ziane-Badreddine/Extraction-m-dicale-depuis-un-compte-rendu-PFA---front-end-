/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const privateApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export type ErrorContext<T = any> = {
  error: {
    cause?: string;
    message: string;
    name: string;
    stack?: string;
    status: number;
    statusText: string;
    data?: T;
  };
  request?: AxiosRequestConfig;
  response?: AxiosResponse;
};

export type SuccessContext<T = any> = {
  data: T;
  status: number;
  statusText: string;
  request?: AxiosRequestConfig;
  response: AxiosResponse<T>;
};

export interface FetchOptions<TSuccess = any, TError = any> {
  onSuccess?: (ctx: SuccessContext<TSuccess>) => void;
  onError?: (ctx: ErrorContext<TError>) => void;
  callbackURL?: string;
}
