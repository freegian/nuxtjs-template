import { configure, addDecorator } from '@storybook/vue'

addDecorator(() => ({
  template: `
<div><story/><div>
`
}))

const req = require.context('../stories', true, /\.stories\.ts$/)
const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module)
