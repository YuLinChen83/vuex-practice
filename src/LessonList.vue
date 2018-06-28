<template>
  <div class="list">
      <LessonItem
        v-for="lesson in lessons"
        :key="lesson"
        :lesson="lesson"
      />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LessonItem from './LessonItem'

export default {
  components: {
      LessonItem,
  },
  computed: {
      ...mapState(['lessons']),
  },
  methods: {
      ...mapActions(['fetchLessons']),
  },
  mounted() {
      this.fetchLessons();
  },
};
</script>

<style scoped>
.list {
    margin: 0 auto;
    padding-top: 60px;
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
