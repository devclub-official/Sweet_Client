import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {zustandStorage} from './storage';
import {UserInfo} from '@/types/user';

type UserState = {
  isLogined: boolean;
  user?: UserInfo;
};
type UserAction = {
  setLoginUser: (user: UserInfo) => void;
  logout: () => void;
};

type UserStoreState = UserState & UserAction;

const initialState: UserState = {
  isLogined: false,
};

export const useUserStore = create<UserStoreState>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        setLoginUser: (user: UserInfo) =>
          set(state => ({...state, isLogined: true, user})),
        logout: () =>
          set(state => ({...state, isLogined: false, user: undefined})),
      }),
      {name: 'userState', storage: createJSONStorage(() => zustandStorage)},
    ),
  ),
);
