import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

const store = new Vuex.Store({
    state: {
        lessons: [],
        cart: [],
    },
    // getters 相當於 state 的 computed
    getters: {
        lessonInCart: state => (
            state.cart.length
        ),
        priceInCart: state => (
            state.cart.reduce((acc, lesson) => {
                return acc + lesson.price;
            }, 0)
        ),
        isLessonInCart: state => lesson => (
            state.cart.findIndex(({id}) => (
                id === lesson.id    //！大雷一定要用嚴謹等於
            )) !== -1
        ),
    },
    // mutation 改變 state
    mutations: {
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
        addToCart(state, lesson) {
            state.cart.push(lesson);
            //state.cart = state.cart.concat(lesson);
            //state.cart = [...state.cart, lesson];
        },
    },
    // 非同步操作放 action
    actions: {
        fetchLessons({commit}) {
            fetch(LESSONS_URL)
            .then(rs => rs.json())
            .then(rs => {
                commit('setLessons', rs.courses);   // 發出 mutation 以改變 state
            });
        }
    },
});

export default store;
