import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
// @ts-ignore
import TheParagraph from '@components/TheParagraph'

storiesOf('Components', module).add(
  'TheParagraph',
  () => ({
    components: { TheParagraph },
    props: {
      text: {
        default: text('text', 'This is a paragraph.')
      }
    },
    template: `
<the-paragraph :text="text"></the-paragraph>
`
  }),
  {
    info: {}
  }
)
