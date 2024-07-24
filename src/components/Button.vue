<!-- src/components/Button.vue -->
<template>
  <button :class="['button', buttonType]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonType: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.button {
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}
.button.primary {
  background-color: #007bff;
  color: #fff;
}
.button.primary:hover {
  background-color: #0056b3;
}
.button.secondary {
  background-color: #6c757d;
  color: #fff;
}
.button.secondary:hover {
  background-color: #5a6268;
}
</style>
