import { createContext } from "react";

export type AuthUser = { name: string; email: string };

export type AuthContextValue = {
  user: AuthUser | null;
  login: (params: { email: string; password: string }) => Promise<void>;
  signup: (params: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);