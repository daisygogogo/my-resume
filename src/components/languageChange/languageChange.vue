<template>
  <div class="container">
    <div class="selector" :class="isChinese?'cn':'en'">
      <span class="chinese" @click="toggleLang()">中</span>
      <span class="english" @click="toggleLang()">Eng</span>   
    </div> 
  </div>
</template>

<script>
export default {
  name: 'languageChange',
  data () {
    return { 
      
    }
  },
  computed: {
    isChinese() {
      if (this.lang === 'chinese') {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    toggleLang: function() {
      this.isChinese = !this.isChinese;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  .selector{
    display:flex;
    justify-content:space-between;
    width:75px;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.1);
    font-size:16px;
    text-align: center;
    &:after{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:34px;
      height:34px;
      border-radius: 17px;
      background-color:rgba(0,0,0,.75);
      z-index: -1;
      transition: all .3s ease
    }
    .chinese{
      display:inline-block;
      height:34px;
      width:34px;
      line-height: 34px;
      color:rgba(0,0,0,0.3);
    }
    .english{
      display:inline-block;
      width:41px;
      height:34px;
      line-height:34px;
      color:rgba(0,0,0,0.3);
    }
  }
  .cn{
    .chinese{
      color:#fff;
    }
    &:after{
      transform: translateX(0);
    }
  }
  .en{
    .english{
      color:#fff;
    }
    &:after{
      transform: translateX(34px);
      width:41px;
    }
  } 
}

</style>
