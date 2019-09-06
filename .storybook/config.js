import { configure, addDecorator } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(() => ({
  template: `
<div><story/></div>
`
}))

const req = require.context('../stories', true, /\.stories\.ts$/)
const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)
