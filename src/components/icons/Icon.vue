<template>
  <svg class="ws-icon" :class="{ chameleon }">
    <use :xlink:href="iconHref" />
  </svg>
</template>

<script>
export default {
  props: {
    chameleon: {
      default: false,
      required: false,
      type: Boolean
    },
    icon: {
      required: true,
      type: String
    }
  },
  computed: {
    iconHref() {
      return `#ws-${this.icon}`;
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  &.ws-icon {
    display: inline-flex;
    max-height: 100%;
    width: 100%;
  }

  &.chameleon {
    fill: currentColor;
  }
}
</style>
