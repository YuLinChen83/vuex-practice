<template>
  <div id="app">
    <Header />
    <LessonList />
  </div>
</template>

<script>
import LessonList from './LessonList.vue';
import Header from './Header.vue';
export default {
  components: {
    Header,
    LessonList
  },
};
</script>

<style>
html, body {
  font-family: Microsoft JhengHei;
  width: 100%;
  margin: 0 auto;
}
</style>
