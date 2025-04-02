import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {zustandStorage} from './storage';

type AuthState = {
  accessToken?: string;
};
type AuthAction = {
  setAccessToken: (accessToken: string) => void;
};

type AuthStoreState = AuthState & AuthAction;

const initialState: AuthState = {};

export const useAuthStore = create<AuthStoreState>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        setAccessToken: accessToken => set(() => ({accessToken})),
      }),
      {name: 'authStore', storage: createJSONStorage(() => zustandStorage)},
    ),
  ),
);
