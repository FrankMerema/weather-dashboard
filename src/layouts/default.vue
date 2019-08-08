<template>
  <main>
    <ws-header />
    <nuxt />
    <ws-icon-registry />
  </main>
</template>

<script>
import WsHeader from '~/components/header/Header';
import WsIconRegistry from '~/components/icons/IconRegistry';

export default {
  components: {
    WsHeader,
    WsIconRegistry
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
