<template>
  <section class="scroll-container">
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.title {
  display: block;
  color: #35495e;
  font-weight: 300;
  font-size: 60px;
  letter-spacing: 1px;
  text-align: center;
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
