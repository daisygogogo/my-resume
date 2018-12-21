<template>
  <div class="skill">
     <div class="title">技能栈</div>
     <div class="container">
        <div class="track_wrapper">
          <ul class="out_tracker">
            <li v-for="item in skillMap.outCircleList" class="item outer" :style="{backgroundColor:item.color}">
              {{item.name}}
            </li>
          </ul>
          <ul class="inner_tracker">
            <li v-for="item in skillMap.innerCircleList" class="item inner" :style="{backgroundColor:item.color}">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="sill_detail">
          <p>熟练使用vue及各种类库的指令封装</p>
          <p>常驻PC/微信三平台前端研发</p>
          <p>擅长组件开发，能用原生JS写代码</p>
          <p>编码常思其健壮性，扩展性，维护性</p>
        </div>
     </div>
   <arrow></arrow>
  </div>
</template>

<script>
  import arrow from '@/components/arrow/arrow'
  import skillMap from './skillMap.js'
export default {
  name: 'personalIntro',
  data () {
    return { 
      skillMap:skillMap
    }
  },
  components:{
    arrow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.skill{
  width:100%;
  background: #109085;
  .title{
    color:#fff;
    font-size:30px; 
    @media (max-width: 430px){
      font-size:20px;
    } 
  }
  .container{ 
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: center;
    max-width: 800px;
    min-width: 750px;
    margin-top:80px;
    @media (max-width: 430px){
      max-width: 430px;
      min-width: 350px;
      margin-top:40px;
    }
    .track_wrapper{
      padding:5px;
      position:relative;
      display:inline-block;
      @media (max-width: 430px){
          margin-bottom:40px;
        }
      .out_tracker{
        position:relative;
        width:242px;
        height:242px;
        border-radius: 50%;
        border:4px dashed #999;       
        .item{
          position: absolute;
          width: 50px;
          height: 50px;
          line-height: 50px;
          background-color: #f66;
          border-radius: 50%;
          text-align: center;
          color:#fff;
          font-size:12px;
          &:nth-child(1){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -4s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  0s infinite alternate;
          }
          &:nth-child(2){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -6s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -2s infinite alternate;
          }
          &:nth-child(3){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -8s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -4s infinite alternate;
          }
          &:nth-child(4){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -10s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -6s infinite alternate;
          }
          &:nth-child(5){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -12s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -8s infinite alternate;
          }
          &:nth-child(6){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -14s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -10s infinite alternate;
          }
          &:nth-child(7){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -16s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -12s infinite alternate;
          }
          &:nth-child(8){
            animation: outerX 8s cubic-bezier(0.36,0,0.64,1) -18s infinite alternate, outerY 8s cubic-bezier(0.36,0,0.64,1)  -14s infinite alternate;
          }

        }
      }
      .inner_tracker{
        width: 142px;
        height: 142px;
        border: 4px dashed #999;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        .inner{
          position: absolute;
          width: 40px;
          height: 40px;
          line-height: 40px;
          background-color: #f66;
          border-radius: 50%;
          text-align: center;
          color:#fff;
          font-size:12px;
           &:nth-child(1){
              animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -4s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1)  0s infinite alternate;
            }
            &:nth-child(2){
              animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -8s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1)  -4s infinite alternate;
            }
            &:nth-child(3){
              animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -12s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1)  -8s infinite alternate;
            }
            &:nth-child(4){
              animation: innerX 8s cubic-bezier(0.36,0,0.64,1) -16s infinite alternate, innerY 8s cubic-bezier(0.36,0,0.64,1)  -12s infinite alternate;
            }
        }
      }
    }
    .sill_detail{
      display:inline-block;
      color:#fff;
      font-size:18px;
      line-height: 24px;
      text-align: center;
      p{
        margin-bottom:14px;
        @media (max-width: 430px){
          font-size:14px;
        } 
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
