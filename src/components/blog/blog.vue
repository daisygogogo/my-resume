<template>
  <div class="blog">
     <div class="title">个人博客</div>
       <ul class="list_wrapper">
         <li v-for="item in blogList" class="item">
           <h1 class="article_name">{{item.title}}</h1>
           <p class="content">{{item.content}}</p>
           <div class="post_time">
            <svg data-v-2790bfbc="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18"><path data-v-2790bfbc="" d="M890.12736 145.672192 846.738432 145.672192l0-12.89216c0-38.643712-31.466496-70.234112-69.922816-70.234112l-1.031168 0c-38.458368 0-69.922816 31.5904-69.922816 70.234112l0 12.89216L319.162368 145.672192l0-12.89216c0-38.643712-31.465472-70.234112-69.922816-70.234112l-1.062912 0c-38.45632 0-69.922816 31.5904-69.922816 70.234112l0 12.89216-43.295744 0c-38.458368 0-69.922816 31.622144-69.922816 70.206464l0 671.446016c0 38.644736 31.465472 70.23616 69.922816 70.23616l755.16928 0c38.458368 0 69.922816-31.591424 69.922816-70.23616L960.050176 215.878656C960.050176 177.294336 928.585728 145.672192 890.12736 145.672192zM733.830144 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.031168 0c23.130112 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.824192 42.139648-41.954304 42.139648l-1.031168 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L733.830144 132.779008zM206.22336 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.062912 0c23.098368 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.855936 42.139648-41.954304 42.139648l-1.062912 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L206.22336 132.779008zM890.12736 901.404672l-755.16928 0c-7.584768 0-13.984768-6.524928-13.984768-14.08L120.973312 393.649152l783.137792 0 0 493.67552C904.111104 894.879744 897.712128 901.404672 890.12736 901.404672z"></path> <path data-v-2790bfbc="" d="M223.755264 494.199808l129.024 0 0 63.488-129.024 0 0-63.488Z"></path> <path data-v-2790bfbc="" d="M449.035264 494.199808l128 0 0 63.488-128 0 0-63.488Z"></path> <path data-v-2790bfbc="" d="M673.291264 494.199808l125.952 0 0 63.488-125.952 0 0-63.488Z"></path> <path data-v-2790bfbc="" d="M223.755264 623.223808l129.024 0 0 62.464-129.024 0 0-62.464Z"></path> <path data-v-2790bfbc="" d="M449.035264 623.223808l128 0 0 62.464-128 0 0-62.464Z"></path> <path data-v-2790bfbc="" d="M673.291264 623.223808l125.952 0 0 62.464-125.952 0 0-62.464Z"></path> <path data-v-2790bfbc="" d="M223.755264 749.175808l129.024 0 0 65.536-129.024 0 0-65.536Z"></path> <path data-v-2790bfbc="" d="M449.035264 749.175808l128 0 0 65.536-128 0 0-65.536Z"></path> <path data-v-2790bfbc="" d="M673.291264 749.175808l125.952 0 0 65.536-125.952 0 0-65.536Z"></path></svg>
            <span class="time">{{item.time}}</span> </div>
         </li>
       </ul> 
  </div>
</template>

<script>
  import arrow from '@/components/arrow/arrow'
  import blogList from './blogList.js'
export default {
  name: 'blog',
  data () {
    return { 
      blogList:blogList
    }
  },
  components:{
    arrow
  },
  computed: {
    
  },
  mounted(){
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog{
  width:100%;
  background-color:#e0e3da;
  .title{
    color:#566270;
    font-size:40px;
    @media (max-width: 430px){
      font-size:20px;
    }  
  }
  .list_wrapper{
    display:flex;
    justify-content: center;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top:20px;
    margin-bottom: 20px;
    width:100%;
    .item{
      margin-right:20px;
      padding: 20px;
      border-radius: 6px;
      color:#566270;
      width:47%;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0 3px 10px rgba(0,0,0,.2);
      @media (max-width: 430px){
        margin-right:0;
        width:100%;
        padding: 10px 20px;
        border-radius:6px 6px 0 0;
        box-shadow: none;
        border-top: 1px solid #eee;
      }
      .article_name{
        font-size:24px;
        line-height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom:10px;
        font-weight: bold;
        @media (max-width: 430px){
          font-size:18px;
          margin-bottom:6px;
        }
      }
      .content{
        color: #666;
        font-size: 16px;
        line-height: 22px;
        text-align: justify;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        @media (max-width: 430px){
          display:none;
        }
      }
      .post_time{
        margin-top:5px;
        color:#888;
        font-size: 16px;
        line-height: 20px;
        svg{
          fill:#888;
          @media (max-width: 430px){
            width:14px;
            height:14px;
          }
        }
        .time{
          display: inline-block;
          vertical-align: top;
          @media (max-width: 430px){
            font-size:14px;
          }
        }
      }
    }
  }
}


</style>
