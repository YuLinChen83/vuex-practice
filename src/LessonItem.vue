<template>
  <div class="lesson">
      <div class="wrap">
        <div class="cover" :style="coverStyle"/>
      </div>
      <span class="title">{{lesson.title}}</span>
      <span class="teachers">{{teachers}}</span>
      <span class="price">{{lesson.price}}</span>
      <div
       :class="btnClass"
       @click="addToCart(lesson)"
      >
      {{btnLabel}}
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';    //引用使method可用store的mutations改變state

export default {
  props: ['lesson'],
  computed: {
    ...mapGetters(['isLessonInCart']),
    teachers() {
        return this.lesson.teachers
        .map(t => t.username)
        .join(', ');
    },
    inCart() {
        return this.isLessonInCart(this.lesson);
    },
    coverStyle(){
      return {
        backgroundImage: `url('${this.lesson.cover}')`,
      };
    },
    btnClass() {
        return {
            buy: true,
            bought: this.inCart,
        };
    },
    btnLabel() {
        return (
            this.inCart ? '已加入購物車': '加入購物車'
        );
    }
  },
  methods: {
      ...mapMutations(['addToCart']),
  },
};
</script>

<<style scoped>
.lesson{
  display: inline-block;
  width: calc( 100% / 5 );
  border-radius: 6px;
  overflow: hidden;
  border: solid 1px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.2);
  margin: 10px;
  vertical-align: top;
}
.lesson:hover .cover {
    transform: scale(1.2);
}
.wrap {
  width: 100%;
  height: 120px;
  overflow: hidden;
}
.cover{
  width: 100%;
  height: 120px;
  background: center center;
  background-size: cover;
  transition: transform .5s;
}
span{
  display: block;
  padding: 6px;
}
.title{
  font-size: .9em;
  height: 30px;
  color: #333;
  text-align: left;
}
.price{
  font-size: .8em;

  color: #178fac;
}
.price:before{
  content: '$';
}
.teachers{
  font-size: .7em;
  text-align: right;
  line-height: 1.7em;
  color: #878787;
}
.buy{
  clear: both;
  text-align: center;
  padding: 6px;
  font-size: .7em;
  background-color: #dee;
  cursor: pointer;
}
.buy:hover{
  background-color: #cee;
}
.buy.bought{
  background-color: #ccc;
}
</style>
