import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import { VBtn, VIcon } from 'vuetify/lib'

storiesOf('Vuetify Components', module).add(
  'VBtn',
  () => ({
    components: { VBtn, VIcon },
    props: {
      color: {
        default: text('color', 'indigo')
      }
    },
    template: `
<div>
  <v-btn class="text-none" :color="color">Button</v-btn>
  <v-btn class="text-none" :color="color" dark>Dark Button</v-btn>
  <v-btn class="text-none" :color="color" text>Flat Button</v-btn>
  <v-btn class="text-none" :color="color" outlined>Outline Button</v-btn>
  <v-btn class="text-none" :color="color" depressed>Depressed Button</v-btn>
  <v-btn class="text-none" :color="color" rounded>Round Button</v-btn>
  <v-btn class="text-none" :color="color" disabled>Disabled Button</v-btn>
  <v-btn class="text-none" :color="color" fab icon><v-icon>mdi-heart</v-icon></v-btn>
  <v-btn class="text-none" :color="color" fab dark><v-icon>mdi-heart</v-icon></v-btn>
  <v-btn class="text-none" :color="color" icon outlined><v-icon>mdi-heart</v-icon></v-btn>
</div>
    `
  }),
  {
    info: {
      summary: 'https://vuetifyjs.com/ja/components/buttons#buttons'
    }
  }
)
