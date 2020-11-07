<template>
  <main>
    <div id="nav" style='max-width: 900px'>
      <router-link to="/">Home</router-link> |
      <router-link to="/colaboradores">Colaboradores</router-link> |
      <router-link to="/contactanos">Contáctanos</router-link> |
      <router-link to="/ubicanos">Ubícanos</router-link>
    </div>
    <router-view/>
    
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  max-width: 900px;
  margin: 0 auto;
  background: rgb(248, 250, 255);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: rgb(35, 41, 116);
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
