<template>
    <div>
        <span class="search">搜尋
            <input type="text" v-model="text" /></span>
        <div class="lesson-list">
            <div class="lesson" v-for="lesson in lessons" :key="lesson">
                <span class="title">{{lesson.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
const SEARCH_API = 'https://hiskio.com/api/v1/courses/search?word=';

export default {
    data() {
        return {
            text: '',
            lessons: [],
        };
    },
    methods: {
        search(val) {
            fetch(`${SEARCH_API}${val}`)
                .then(rs => rs.json())
                .then(data => {
                    this.lessons = data.courses;
                });
        }
    },
    watch: {
        text(val) {
            this.searchDebounced(val);
        },
    },
    created() {
        this.searchDebounced = debounce(this.search, 500);
    }
}
</script>
