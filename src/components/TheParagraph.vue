<template>
  <p>{{ text }}</p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class TheParagraph extends Vue {
  @Prop({ type: String, required: true })
  text: string
}
</script>

<style lang="scss" scoped>
p {
  font-size: 16px;
  font-weight: bold;
}
</style>
