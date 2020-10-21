import { ActionTree } from "vuex";
import { Account } from "~/types";

export interface RootState {
  user: Account | null;
}

export interface AuthState {
  authenticated: boolean;
}

export interface AccountState {
  account: Account | null;
  points: number | null;
}

export interface Actions<S, R> extends ActionTree<S, R> {
  // nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void;
}