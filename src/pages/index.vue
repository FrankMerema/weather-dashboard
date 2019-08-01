<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        weather-dashboard
      </h1>
      <h2 class="subtitle">
        A dashboard for seeing weather information about the selected cities
      </h2>
      <div class="links">
        <button type="button" class="btn btn-primary">Click me</button>
        <a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
