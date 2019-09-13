import { configure, addDecorator } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'
import Vuetify, { VApp, VContent } from 'vuetify/lib'
import 'vuetify/src/styles/main.sass'

Vue.use(Vuetify)

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(() => ({
  vuetify: new Vuetify(),
  components: { VApp, VContent },
  template: `
<v-app>
  <v-content class="ma-5">
    <story/>
  </v-content>
</v-app>
`
}))

const req = require.context('../stories', true, /\.stories\.ts$/)
const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)
