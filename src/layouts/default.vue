<template>
  <main>
    <Header />
    <nuxt />
    <icon-registry />
  </main>
</template>

<script>
import Header from '~/components/header/Header';
import IconRegistry from '~/components/icons/IconRegistry.vue';

export default {
  components: {
    Header,
    IconRegistry
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
