<template>
  <div class="skill">
     <div class="title">项目经历</div>
     <ul class="projects_wraper">
       <li v-for="(item,index) in projectList" class="item"
       :class="{
      currentItem: currentItem === index,
      preItem: currentItem > index,
      nextItem:currentItem < index
      }" @touchmove.prevent="touchmove" @touchstart="touchstart" @touchend="touchend"
      :style="{zIndex:currentItem > index ? index:projectList.length-index}">
         <div :style="{backgroundImage:'url('+ item.image +')'}" class="image"></div>
         <p class="desc">{{item.desc}}</p>
         <div class="tool">
           <a :href="item.url" class="btn">
             <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
              <path d="M630.88 528.36c-7.264 0-14.512-0.576-21.664-1.736l73.896-73.936 0.568-0.376a27.52 27.52 0 0 0 3.336-2.872l100.792-101.056c30.944-31.016 30.944-81.488 0-112.504a78.68 78.68 0 0 0-56.112-23.304 78.848 78.848 0 0 0-56.152 23.304l-96.68 96.96-4.304 4.192-76.824 76.832c-6.424-42.224 7.424-85.632 37.76-116.064l100.92-101.208a133.68 133.68 0 0 1 95.264-39.576c35.984 0 69.824 14.056 95.272 39.576 52.552 52.688 52.552 138.408 0 191.08L726.024 488.904a133.48 133.48 0 0 1-95.144 39.456z"></path>
              <path d="M391.624 661.72a28.304 28.304 0 0 1-28.256-28.264c0-7.856 3.224-15.184 9.096-20.656L612.56 372.664c5.648-6.064 12.976-9.288 20.832-9.288a28.28 28.28 0 0 1 28.248 28.256 28.24 28.24 0 0 1-8.16 19.864l-6.112 6.232 0.064 0.048-230.576 230.584-0.056-0.032-5.088 4.936a27.92 27.92 0 0 1-20.088 8.456z"></path>
              <path d="M292.288 867a133.672 133.672 0 0 1-95.264-39.56c-52.536-52.688-52.536-138.44 0-191.128l100.92-101.184a133.456 133.456 0 0 1 95.104-39.456c7.128 0 14.224 0.56 21.248 1.68l-76.152 76.136a10.84 10.84 0 0 0-0.672 0.528L236.152 675.64c-30.928 31.016-30.928 81.472 0 112.472a78.792 78.792 0 0 0 56.136 23.312 78.696 78.696 0 0 0 56.112-23.312l100.92-101.168c0.656-0.656 1.24-1.392 1.8-2.128l75.056-75.144c6.608 42.392-7.216 86-37.688 116.592l-100.96 101.176a133.6 133.6 0 0 1-95.24 39.56z"></path>
            </svg>
           </a>
           <button class="btn qrcode" @click="showQrCode">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
                <path d="M796.444444 1024 796.444444 910.222222 910.222222 910.222222 910.222222 796.444444 1024 796.444444 1024 1024 796.444444 1024ZM910.222222 568.888889 1024 568.888889 1024 682.666667 910.222222 682.666667 910.222222 568.888889ZM967.111111 455.111111 625.777778 455.111111C594.375111 455.111111 568.888889 429.624889 568.888889 398.222222L568.888889 56.888889C568.888889 25.486222 594.375111 0 625.777778 0L967.111111 0C998.513778 0 1024 25.486222 1024 56.888889L1024 398.222222C1024 429.624889 998.513778 455.111111 967.111111 455.111111ZM910.222222 113.777778 682.666667 113.777778 682.666667 341.333333 910.222222 341.333333 910.222222 113.777778ZM853.333333 284.444444 739.555556 284.444444 739.555556 170.666667 853.333333 170.666667 853.333333 284.444444ZM398.222222 1024 56.888889 1024C25.486222 1024 0 998.513778 0 967.111111L0 625.777778C0 594.375111 25.486222 568.888889 56.888889 568.888889L398.222222 568.888889C429.624889 568.888889 455.111111 594.375111 455.111111 625.777778L455.111111 967.111111C455.111111 998.513778 429.624889 1024 398.222222 1024ZM341.333333 682.666667 113.777778 682.666667 113.777778 910.222222 341.333333 910.222222 341.333333 682.666667ZM284.444444 853.333333 170.666667 853.333333 170.666667 739.555556 284.444444 739.555556 284.444444 853.333333ZM398.222222 455.111111 56.888889 455.111111C25.486222 455.111111 0 429.624889 0 398.222222L0 56.888889C0 25.486222 25.486222 0 56.888889 0L398.222222 0C429.624889 0 455.111111 25.486222 455.111111 56.888889L455.111111 398.222222C455.111111 429.624889 429.624889 455.111111 398.222222 455.111111ZM341.333333 113.777778 113.777778 113.777778 113.777778 341.333333 341.333333 341.333333 341.333333 113.777778ZM284.444444 284.444444 170.666667 284.444444 170.666667 170.666667 284.444444 170.666667 284.444444 284.444444ZM796.444444 796.444444 568.888889 796.444444 568.888889 568.888889 796.444444 568.888889 796.444444 796.444444ZM682.666667 1024 568.888889 1024 568.888889 910.222222 682.666667 910.222222 682.666667 1024Z"></path>
              </svg>
           </button>
         </div>
         <div class="qrcode_wrapper" v-show="qrcodeShow" @click.stop="showQrCode">
           <img class="qrcode_img" :src="item.qrcode">
         </div>
       </li>
     </ul>
       <a class="seeGithub" href="https://github.com/jas0ncn" target="_blank">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
          <path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" fill="#ffffff"></path>
        </svg>
        <p class="more"><a href="https://github.com/daisygogogo">在我的Github查看更多</a></p>
      </a>
      <arrow></arrow>
  </div>
</template>

<script>
  import arrow from '@/components/arrow/arrow'
import projectList from './projectList'
export default {
  name: 'projects',
  data () {
    return { 
      projectList:projectList,
      qrcodeShow: false, //是否显示二维码
      currentItem:0,  //当前中间显示的item下标
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
  components:{
    arrow
  },
  computed: {
    getZindex: function(index){
      let zIndex = this.projectList.length-index;
      return zIndex;
    }
  },
  mounted(){
  },
  methods: {
    showQrCode: function(){
      this.qrcodeShow = !this.qrcodeShow;     
    },
    touchmove(e){
      var touchmove = e.targetTouches[0];
      this.offsetPos.x = touchmove.clientX - this.startPos.x;　
    },
    touchstart(e){
      //touches是屏幕上所有的touch，取第一个
      var touchstart = e.targetTouches[0]; 
      this.startPos.x = touchstart.clientX ;
    },
    touchend(e){
      if(this.offsetPos.x < -50){ //如果滑动x差值为负值，则是向左滑动到下一页，距离大于50才切换页面
        if( this.currentItem < projectList.length -1 ){//判断最大页码
          this.currentItem++; 
        }
        
      }else if(this.offsetPos.x > 50){
        //如果滑动x差值为正值，则是向右滑动到上一页，距离大于50才切换页面
        //判断最小页码
        if( this.currentItem >= 1){
          this.currentItem--;
        }        
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.skill{
  width:100%;
  background: #4b85a0;
  .title{
    color:#fff;
    font-size:40px;
     @media (max-width: 430px){
      font-size:20px;
    }  
  }
  @media (max-width: 430px){
    .arrow{
      display:none;
    }
  }
  .projects_wraper{
    display:flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin-top:20px;
    width:76%;
    @media (max-width: 430px){
      width:100%;
      position:relative;
      height:420px;
    }  
    .item{
      display:inline-block;
      position: relative;
      vertical-align: top;
      text-align: center;
      flex:0 0 280px;
      width:280px;
      height:400px;
      background: linear-gradient(180deg,#fff,#f0f0f0);
      margin:10px;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 6px;
      @media (max-width: 430px){
        position:absolute;
        left:10px;
        transition:all 0.4s;
        &.preItem{
          transform: translateX(-300px) translateZ(0);
        }
        &.currentItem{
          transform: translateX(0) translateZ(0);
        }
        &.nextItem{
          transform: translateX(300px) translateZ(0);
        }
      } 
      

      &:last-child{
        margin-right:0;
      }
      &:hover{
        box-shadow: 0 12px 24px rgba(0,0,0,.3);
      }
      .image{
        width:100%;
        height:150px;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .desc{
        font-size:16px;
        line-height: 30px;
        margin:8px 8px 0 8px;
        text-align: left;
        text-indent:40px;
      }
      .tool{
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        padding:10px 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .btn{
          display: inline-block;
          border:1px solid #859398;
          width:48%;
          height:36px;
          box-sizing: border-box;
          border-radius: 4px;
          background: transparent;
          padding:0 0;
          opacity: .6;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all .3s ease;
          svg{
            fill: #859398;
          }
          &:hover{
            background-color:#3d6e86;

            svg{
              fill: #fff;
            }
          }

        }
      }
      .qrcode_wrapper{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index:15;
        .qrcode_img{
          display:block;
          width:220px;
          height:220px;
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
        }
      }
    }
  }
  .seeGithub{
    border:1px solid #fff;
    border-radius: 6px;
    width:300px;
    height:50px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:20px;
    opacity: .7;
    transition: all .3s ease;
    &:hover{
      background-color:#3d6e86;
 
    }
    svg{
      display:inline-block;
      margin-right:15px;
    }
    .more{
      display: inline-block;
      a{
        color:#fff;
        letter-spacing: 1.5px;
      }  
    }
  }
  
}

@keyframes outerX{
    0% {  left: -28px;  }
    100% {  left: 218px;  }
}
@keyframes outerY{
   0% {  top: -28px;  }
   100% {  top: 218px;  }
}
@keyframes innerX{
    0% {  left: -22px;  }
    100% {  left: 122px;  }
}
@keyframes innerY{
   0% {  top: 122px;  } /*改变动画方向为逆时针*/
   100% {  top: -22px;  }
}


</style>
