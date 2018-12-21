<template>
  <div class="menu_bar">
    <div class="item" v-for="(route, i) in routeMap" :class="[{'show':showIndex === i},{'hightLight':currentPage === i}]" >
      <a class="link" @mouseenter="enter(i)" @mouseleave="leave(i)" @click="emitIndex(i)">
        <img class="img"  height="8" width="8" :src="`/static/svgs/menu/${route.path}.svg`">
      </a>
       <span class="description">{{ route['cn'] }}</span>      
    </div> 
  </div>
</template>

<script>
import routeMap from './menu'
export default {
  name: 'menuBar',
  data () {
    return { 
      routeMap: routeMap,
      showIndex: ''
    }
  },
  props:["currentPage"],
  computed: {
    
  },
  methods: {
    enter (index) {
      this.showIndex = index;
    },
    leave (index) {
      this.showIndex = ''
    },
    emitIndex(index){
      this.$emit('click-index', index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu_bar{
  text-align: right;
  .item{
    position:relative;
    margin:20px 0;
    .link{
      display:flex;
      align-items: center;
      justify-content: center;
      width:12px;
      height:12px;
      border-radius: 50%;
      background: rgba(0,0,0,.7);
      opacity: .1;    
      position:absolute;
      right:0;
      z-index: 20;
      .img{

      }
    }
    .description{
        display:inline-block;
        position:absolute;
        right:0px;
        top:-5px;
        font-size:14px;
        color:#fff;
        padding:6px 8px;
        font-weight:700;
        background-color: rgba(0,0,0,.7);
        border-radius:3px 0 0 3px;
        transform:translateX(50px);
        opacity: 0;
        transition: all .6s ease;
        &:after{
          content:' ';
          position:absolute;
          right:-26px;
          top:0;
          width:0px;
          height:0px;
          border-top:13px solid transparent;
          border-right:13px solid transparent; 
          border-bottom:13px solid transparent; 
          border-left:13px solid rgba(0,0,0,.7);
        }
      } 
  }
  .show{
    .link{
      transform: scale(3);
      opacity: 1;
    }
    .description{
      opacity: 1;
      transform:translateX(-50px);
      transition: all .6s ease;
    }
  }
  .hightLight{
    .link{
      transform: scale(3);
      opacity: 1;
    }
  }   
}

</style>
