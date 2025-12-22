/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorContext, FetchOptions, publicApi } from "@/lib/axios";
import { parseErrorContext } from "@/lib/utils";
import { User } from "@/types/auth";
import { create } from "zustand";

type AuthType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitializing: boolean;
  error: ErrorContext | null;

  login: (
    credentials: { email: string; password: string },
    options?: FetchOptions
  ) => Promise<void>;

  register: (
    data: { name: string; email: string; password: string },
    options?: FetchOptions
  ) => Promise<void>;

  logout?: (options?: FetchOptions) => Promise<void>;
};

interface LoginResponse {
  message: string;
  user: User;
}

interface RegisterResponse {
  message: string;
}

export const useAuth = create<AuthType>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isInitializing: false,
  //   reloadUser: async () => {
  //     const { initialized } = get();
  //     if (initialized) return null;
  //     set({ loading: true, error: null });

  //   },
  login: async ({ email, password }, options) => {
    const { isAuthenticated, isLoading } = get();
    if (isAuthenticated || isLoading) return;
    set({ isLoading: true, error: null });
    try {
      const res = await publicApi.post<LoginResponse>("/login", {
        email,
        password,
      });

      set({ isAuthenticated: true, user: res.data.user });

      options?.onSuccess?.({
        data: res.data,
        status: res.status,
        statusText: res.statusText,
        request: res.config,
        response: res,
      });
    } catch (e) {
      const authError = parseErrorContext(e);

      set({ error: authError });
      options?.onError?.(authError);
    } finally {
      set({ isLoading: false });
    }
  },
  register: async ({ name, email, password }, options) => {
    const { isAuthenticated, isLoading } = get();
    if (isAuthenticated || isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const res = await publicApi.post<RegisterResponse>("/register", {
        name,
        email,
        password,
      });

      options?.onSuccess?.({
        data: res.data,
        status: res.status,
        statusText: res.statusText,
        request: res.config,
        response: res,
      });
    } catch (e) {
      const authError = parseErrorContext(e);

      set({ error: authError });
      options?.onError?.(authError);
    } finally {
      set({ isLoading: false });
    }
  },
}));
