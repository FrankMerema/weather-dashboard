<template>
  <button class="btn" :disabled="disabled" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    type: {
      default: 'button',
      required: false,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  align-content: center;
  align-items: center;
  background: none;
  border: 0;
  border-radius: $ws-gutter-size-small / 2;
  cursor: pointer;
  display: inline-block;
  line-height: 1.15;
  margin: 0;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: 200ms background linear;
  user-select: none;
  vertical-align: baseline;
  white-space: nowrap;

  &:active:not([disabled]) {
    transform: scale(0.98);
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }

  &.btn-primary {
    background: transparent;
    border: 1px solid #3b8070;
    color: #3b8070;
    font-size: $ws-font-size;
    font-weight: 700;
    padding: 10px 30px;
  }
}
</style>
