<template>
  <div id="app">
    <!-- <div id="header-nav" class="nav-bars"> -->
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/words">Words</router-link> |
        <router-link :to="latestWord">{{ latestWord }}</router-link> -->
    <!-- </div> -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <router-link to="/">
          <b-navbar-brand href="/" class="ml-5">NEO Seed Nodes Status Test</b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-5">
            <router-link to="/">
              <b-nav-item href="/" class="px-2">Main</b-nav-item>
            </router-link>
            <router-link to="/nodeinfo">
              <b-nav-item href="/nodeinfo" class="px-2">Seed Node</b-nav-item>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
    <!-- <div id="footer-nav" class="nav-bars">
      Hi, My Dictionary 2018 - {{ wordCount }} words has been added.
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // wordCount: 0,
      // latestWord: 'Latest_Word'
    }
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
  a {
    color: royalblue;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // .nav-bars{
  //   background: cornflowerblue;
  //   position: fixed;
  //   width: 100%;
  //   padding: 10px;
  //   color: white;

  //   a {
  //     color: white;
  //     text-decoration: none;
  //   }
  // }

  // #header-nav {
  //   top: 0;
  //   left: 0;
  // }

  #footer-nav {
    bottom: 0;
    left: 0;
  }

  .nav-link {
    color: white !important;
  }

  .nav-link:hover {
    color: orange !important;
  }
}
</style>
