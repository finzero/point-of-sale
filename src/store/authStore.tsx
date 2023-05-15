import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IAuth {
  username: string;
}

interface IAuthActions {
  login: (auth: IAuth) => void;
  logout: () => void;
}

// set actions outside instead of inside actions object, coz persist caused selected return undefined
export interface IAuthStore extends IAuthActions {
  auth: IAuth;
}

export const useAuthStore = create(
  persist(
    devtools<IAuthStore>((set) => ({
      auth: { username: '' },
      login: (auth) => set(() => ({ auth }), false, '[Auth] Login'),
      logout: () =>
        set(() => ({ auth: { username: '' } }), false, '[Auth] Logout'),
    })),
    { name: 'auth' }
  )
);

// selectors
export const useAuth = () => useAuthStore((state: IAuthStore) => state.auth);
