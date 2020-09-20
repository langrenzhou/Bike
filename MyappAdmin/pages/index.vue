<template>
  <div class="container">
  <h2>这里是首页</h2>
  
  </div>
</template>

<script>
export default {

  created(){ 
    const UserInfo=localStorage.getItem('user')
    if( !UserInfo ){
      this.$router.push({name:'Login'})
    }
    
  }
}
</script>

<style>

</style>
