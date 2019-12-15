<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <router-link to="/">
          <b-navbar-brand href="/" class="ml-5">NEO Seed Nodes Status Monitor</b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-5">
            <router-link to="/">
              <b-nav-item href="/nodes" class="px-2">Main</b-nav-item>
            </router-link>
            <router-link to="/nodes">
              <b-nav-item href="/nodes" class="px-2">Nodes</b-nav-item>
            </router-link>
            <router-link to="/nodeinfo">
              <b-nav-item href="/nodeinfo" class="px-2">Node Info</b-nav-item>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import * as signalR from "@aspnet/signalr";
var connection = null;
export default {
  name: "App",
  data() {
    return {};
  },
  created: function() {
    // Connect to the hub
    connection = new signalR.HubConnectionBuilder()
      .withUrl("http://47.97.73.20/hubs/node")
      .build();

    connection.start().catch(function() {
      setTimeout(function() {
        connection.start();
      }, 5000);
    });

    connection.on("Receive", data => {
      this.$store.dispatch("setNeoNodesAction", data);
    });
  }
};
</script>

<style lang="scss">
body {
  overflow: auto;
  a {
    color: royalblue;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .nav-link {
    color: white !important;
  }

  .nav-link:hover {
    color: rgb(41, 245, 119) !important;
  }
}
</style>
