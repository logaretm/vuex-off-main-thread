<template>
  <div id="app">
    <div>
      <img src="https://media.giphy.com/media/3o6ZtjrcQ4Cs3oYkik/giphy.gif" alt="Mind Blown">
    </div>
    <button @click="$store.dispatch('generateItems')">
      <Loader v-if="$store.state.isWorking"/>
      <span v-else>Generate Primes</span>
    </button>
    <ul>
      <li v-for="(prime, idx) in $store.state.items" :key="idx">{{ prime }}</li>
    </ul>
  </div>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name: "App",
  components: {
    Loader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  display: block;
}

button {
  background: #230A59;
  color: #fff;
  border: none;
  padding: 15px 40px;
  display: block;
  margin: 20px auto;
  border-radius: 7px;
}

button > span {
  font-size: 18px;
}

img {
  width: 200px;
  height: 200px;
}
</style>
