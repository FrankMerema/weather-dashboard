<template>
  <header class="ws-header">
    <icon icon="logo" />
    <h2>Merema's Weather</h2>
  </header>
</template>

<script>
import Icon from '~/components/icons/Icon';

export default {
  name: 'Header',
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
.ws-header {
  align-items: center;
  background: $ws-background-to-color;
  box-shadow: $ws-black 0 1px 24px 0;
  color: $ws-white;
  display: flex;
  justify-content: center;
  padding: $ws-gutter-size-small $ws-gutter-size;
  z-index: 1;

  h2 {
    flex: 1;
    margin: 0;
  }

  .ws-icon {
    @include size($ws-gutter-size-small * 3);
    fill: $ws-white;
    margin: $ws-gutter-size-small $ws-gutter-size-small $ws-gutter-size-small 0;
  }
}
</style>
