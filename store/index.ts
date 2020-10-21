import { MutationTree } from "vuex";
import { Account, Actions, RootState } from "~/types";

export const state = (): RootState => ({
  user: null
})

export const mutations: MutationTree<RootState> = {
  setAccount(state: RootState, user: Account): void {
    state.user = user
  }
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit, dispatch }) {

  }
}
