<template>
  <nav>
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link> |-->
    <router-link to="/myechart1">VideoLengthAnalysis</router-link> |
<!--    <router-link to="/myechart3">Myechart3</router-link> |-->
    <router-link to="/mywordcloud">FollowerAndLooktime</router-link> |
<!--    <router-link to="/map">ChinaMap</router-link> |-->
    <router-link to="/piechart">WatchnumpvAndRating</router-link> |
    <router-link to="/scatterchart">UserBehaviorAnalysis</router-link> |
<!--    <router-link to="/aqmap">Myaqmap</router-link> |-->
    <router-link to="/NumpvAndRating">WatchnumpvAndRating</router-link> |
<!--    <router-link to="/LooktimeAndFollower">LooktimeAndFollower</router-link> |-->
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
