// store.ts
import { InjectionKey, ref, watchEffect } from 'vue'
import { db } from '@/firebase'
import { getUser } from '@/getCurrentFirebaseUser'
import { createStore, Store } from 'vuex'
import { doc, getDoc } from "firebase/firestore";

export type Blog = {
  title: string;
  blogPost?: string;
  blogHTML?: string;
  welcomeScreen?: boolean;
  photo?: string;
  blogCoverPhoto?: string;
};

export type BlogCardData = {
  blogTitle: string;
  blogCoverPhoto: string;
  blogDate: string;
};

// define your typings for the store state
export interface State {
  dummyCards: BlogCardData[], // to do make type for state
  editPost: boolean
  userInfo: unknown //fix
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    dummyCards: [
      { blogTitle: "lorem", blogCoverPhoto: "stock-1", blogDate: "000000" },
    ],
    editPost: false,
    userInfo: []
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    //payload === doc from docSnap.data()
    setProfileInfo(state, payload) {
      state.userInfo = { ...payload }
    },
    setProfileInitials(state) {
      return state//todo
    }
  },
  actions: {
    async getCurrentUserData({ commit }) {
      let user = getUser().user.value?.uid
      if (!user) {
        return
      }
      const docRef = doc(db, 'users', `${user}`)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        commit('setProfileInfo', docSnap.data())
        // commit('setProfileInitials')
        return
      }
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
})
