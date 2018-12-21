<template>
    <div class="arrow">↓</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return { 
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .arrow{
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
    animation: float 1.3s ease infinite alternate-reverse;
    color:rgba(0,0,0,0.5);
  }
  @keyframes float{
    from{transform:translate(0,0)}
    to{transform:translate(0,10px)}
  }
</style>
