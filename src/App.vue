<template>
  <div id="app" @mousewheel="mousewheel" @touchmove.prevent="touchmove" @touchstart="touchstart" @touchend="touchend">
    <menu-bar :currentPage="currentPage"  @click-index="listenClickIndex"></menu-bar>
    <index class="page" 
      :class="{
      currentPage: currentPage === 0,
      prePage: currentPage > 0,
      nextPage:currentPage < 0
      }"> 
      </index>
    <personal-intro class="page"
     :class="{
      currentPage: currentPage === 1,
      prePage: currentPage > 1,
      nextPage:currentPage < 1
      }">  
    </personal-intro>
    <skills class="page"
     :class="{
      currentPage: currentPage === 2,
      prePage: currentPage > 2,
      nextPage:currentPage < 2
      }">  
    </skills>
     <projects class="page"
     :class="{
      currentPage: currentPage === 3,
      prePage: currentPage > 3,
      nextPage:currentPage < 3
      }">  
    </projects>
    <blog class="page"
     :class="{
      currentPage: currentPage === 4,
      prePage: currentPage > 4,
      nextPage:currentPage < 4
      }">  
    </blog>
  </div>
</template>

<script>
import menuBar from '@/components/menuBar/menuBar'
import personalIntro from '@/components/personalIntro/personalIntro'
import index from '@/components/index/index'
import skills from '@/components/skills/skills'
import projects from '@/components/projects/projects'
import blog from '@/components/blog/blog'
export default {
  name: 'App',
  data(){
    return{
      currentPage:0,
      heightList:[],
      scrollY:0, //滚动条的位置
      pageSize:undefined,
      startPos:{ //触摸点的初始值
        x:0,
        y:0
      },
      offsetPos:{ //触摸点移动值
        x:0,
        y:0
      }
    }
  },
  components: {
    menuBar,personalIntro,index,skills,projects,blog
  },
  mounted:function () {
    let $this = this;
    this.$nextTick(function () {
      $this.pageSize = document.getElementsByClassName("page").length; //获取所有page节点
    });
  },
  methods:{
    mousewheel(e){
      let prevIndex = this.currentPage; //前一页
      if(e.deltaY>0){
        if(this.currentPage < this.pageSize-1){ //判断最大页码
          this.currentPage++; 
        }  
      }else{
        if(this.currentPage>=1){
          this.currentPage--;
        }    
      }
    },
    touchmove(e){
      var touchmove = e.targetTouches[0];
      this.offsetPos.y = touchmove.clientY - this.startPos.y;　
    },
    touchstart(e){
      //touches是屏幕上所有的touch，取第一个
      var touchstart = e.targetTouches[0]; 
      this.startPos.y = touchstart.clientY ;
    },
    touchend(e){
      if(this.offsetPos.y < -100){ //如果滑动Y差值为负值，则是向下滑动，距离大于100才展示下一页
        if(this.currentPage < this.pageSize-1){ //判断最大页码
          this.currentPage++; 
        }  
      }else if(this.offsetPos.y > 100){
        //如果滑动Y差值为正值，则是向上滑动，距离大于100才展示上一页
        if(this.currentPage>=1){ //判断最大页码
          this.currentPage--;
        }  
      }
    },
    listenClickIndex(v){
      this.currentPage = v;
    }
  }
}
</script>

<style scoped lang="scss">
#app{
  width:100%;
  overflow:hidden;
  .lang_wrapper{
    position:absolute;
    right:20px;
    top:20px;
    z-index:20;
  }
  .menu_bar{
    position:fixed;
    z-index: 20;
    top:0;
    right:0;
    padding-right:40px;
    height:100%;
    width:200px;
    text-align: right;
    display:flex;
    justify-content: center;
    flex-direction: column;
     @media (max-width: 430px){
      display:none;
    }
  }
  .page{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    opacity: 0;
    padding: 40px;
    box-sizing: border-box;
    transition: transform 800ms ease, background 300ms ease;
    @media (max-width: 430px){
      padding: 10px 20px;
    }
  }
  .currentPage{
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
  .prePage {
    opacity: 1;
    transform: translateY(-100%) translateZ(0);
  }
  .nextPage {
    opacity: 1;
    transform: translateY(100%) translateZ(0);
  }
  
}

</style>
