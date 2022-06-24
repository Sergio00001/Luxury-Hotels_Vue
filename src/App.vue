<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style>
@font-face {
  font-family: 'Adobe Garamond Pro Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Adobe Garamond Pro Regular'),
    url('@/fonts/AGaramondPro-Bold.woff') format('woff');
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Adobe Garamond Pro Regular', 'Montserrat', sans-serif;
}

html body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

ul li {
  list-style-type: none;
}
</style>
