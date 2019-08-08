<template>
  <section class="scroll-container">
    <h1 class="title">
      weather-dashboard
    </h1>
    <h2 class="subtitle">
      A dashboard for seeing weather information about the selected cities
    </h2>
    <div class="links">
      <ws-button class="btn-primary">
        Click me
      </ws-button>
      <ws-button type="button" class="btn-primary">Click me</ws-button>
    </div>
  </section>
</template>

<script>
import WsButton from '~/components/button/Button';

export default {
  components: { WsButton }
};
</script>

<style lang="scss">
.scroll-container {
  padding: $ws-gutter-size;
}

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
