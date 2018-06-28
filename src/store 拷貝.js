import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

const store = new Vuex.Store({
    state: {
        lessons: [],
    },
    // mutation 改變 state
    mutations: {
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
    },
    // 非同步操作放 action
    actions: {
        fetchLessons({commit}) {
            fetch(LESSONS_URL)
            .then(rs => rs.json())
            .then(rs => {   // 不太懂
                commit('setLessons', rs.courses);   // 發出 mutation 以改變 state
            });
        }
    },
});

export default store;
