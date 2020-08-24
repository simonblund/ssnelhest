/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function setDefaultDate() {
  let date = new Date();
  date.setFullYear(date.getFullYear() - 70);
  date = date.toISOString().substring(0, 10);
  return date;
}

export const store = new Vuex.Store({
  state: {
    dateOfBirth: setDefaultDate(),
    sex: 'male',
  },
  mutations: {
    setDate(state, date) {
      state.dateOfBirth = date;
    },
    changeSex(state, sex) {
      state.sex = sex;
    },
  },
});
