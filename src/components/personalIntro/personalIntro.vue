<template>
  <div class="personal_intro">
     <div class="title">关于我</div>
    <ul class="item_wrapper">
      <li class="item">
        <div class="img_wrapper">
          <img class="img" height="45" width="45" src="/static/svgs/info/i_age.svg">
        </div>
        <p class="desc">年龄/29岁</p>
      </li>
      <li class="item">
        <div class="img_wrapper">
          <img class="img" height="45" width="45" src="/static/svgs/info/i_edu.svg">
        </div>
        <p class="desc">学历/本科</p>
      </li>
      <li class="item">
        <div class="img_wrapper">
          <img class="img" height="45" width="45" src="/static/svgs/info/i_site.svg">
        </div>
        <p class="desc">坐标/广州</p>
      </li>
      <li class="item">
        <div class="img_wrapper">
          <img class="img" height="45" width="45" src="/static/svgs/info/i_status.svg">
        </div>
        <p class="desc">状态/在职</p>
      </li>
    </ul>   
     <div class="more_desc">
        <p>具备后台Java开发，前端开发能力</p>
        <p>熟悉MVVM开发，深谙模块化开发之道</p>
        <p>高效的自学能力，具备独立分析解决问题能力</p>
        <p>强烈的自我驱动力，享受编程带来的成就感</p>
     </div>
      <arrow></arrow>
  </div>
</template>

<script>
  import arrow from '@/components/arrow/arrow'
export default {
  name: 'personalIntro',
  data () {
    return { 
      showIndex:''
    }
  },
  components:{
    arrow
  },
  computed: {
    
  },
  methods: {
    enter(index) {
      this.showIndex = index;
    },
    leave(index){
      this.showIndex = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes effect{  /*辐射动效*/
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #516395, 0 0 0 10px rgba(255,255,255,0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #516395, 0 0 0 10px rgba(255,255,255,0.5);
    transform: scale(1.5);
    opacity: 0;
  }
}
.personal_intro{
  width:100%;
  background: #516395;
  .title{
    color:#fff;
    font-size:30px;
    @media (max-width: 430px){
      font-size:20px;
    }
  }
  .item_wrapper{
    display:flex;
    flex-wrap:wrap;
    width:80%;
    margin-top:60px;
    justify-content: space-around;
    @media (max-width: 430px){
      margin-top:26px;
    }
    .item{
      width:90px;
      padding-bottom: 10px;
      text-align: center;
      display: inline-block;
     /* margin-right:80px;*/
      &:last-child{
        margin-right:0px;
      }
      .img_wrapper{
        position:relative;
        height:90px;
        width:90px;
        background-color:#677bb3;
        border-radius: 50%;
        margin-bottom: 20px;
        &:after{
          position: absolute;
          left:0;
          top:0;
          content:' ';
          width:90px;
          height:90px;
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(255, 255, 255,0.1);
          opacity: 0;
          transform: scale(0.9);
        }
        &:hover:after{
          animation: effect 1.3s  ease-out 75ms;
        }
        @media (max-width: 430px){
          margin-bottom:10px;
        }
        .img{
          display:inline-block;
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
        }
      }
      .desc{
        font-size:18px;
        color:#fff;
        @media (max-width: 430px){
          font-size:14px;
        }
      }
    }
  }
  .more_desc{
    margin-top:60px;    
    color:#fff;
    text-align: center;
    p{
      font-size: 18px;
      line-height: 24px;
      margin-bottom:20px;
      @media (max-width: 430px){
        font-size:14px;
      }
    }
  }
}

</style>
