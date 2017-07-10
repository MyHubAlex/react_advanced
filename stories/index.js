import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text , number } from '@storybook/addon-knobs';
import { Button, Welcome } from '@storybook/react/demo';

import { Form as FormSemantic } from 'semantic-ui-react';

import '../semantic/dist/semantic.min.css';

import TextForm from '../src/components/widgets/forms/TextForm';
import DateForm from '../src/components/widgets/forms/DateForm';
import RadioForm from '../src/components/widgets/forms/RadioForm';
import NumberForm from '../src/components/widgets/forms/NumberForm';
import RadioGroupForm from '../src/components/widgets/forms/RadioGroupForm';
import Image from '../src/components/widgets/Image';

const Form = (storyFn) => (
  <FormSemantic>
    { storyFn() }
  </FormSemantic>
);

addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Form', module)
  .addDecorator(Form)
  .addWithInfo('text', () => <TextForm
                                name="author"
                                onChange={text('onChange', 'test')}
                                value='test' label="Author"
                              />)
  .addWithInfo('Dat', () => <DateForm name='дата события' />)
  .addWithInfo('RadioGroup', () => <RadioGroupForm
                                          name='Выберите один из 3 вариантов'
                                          labels={['один', 'два', 'три']}
                                          values={[1, 2, 3]}
                                          value={1}
                                          onChange={text('onChange', 'test')}
                                          />)
  .addWithInfo('Number', () => <NumberForm
                                name="years"
                                onChange={{}}
                                value={18} label="Укажите свой возраст"
                              />)
  .addWithInfo('Radio', () => <RadioForm
                                    label='Вы согласны на обработку персональных данных'
                                  />);

storiesOf('Image', module).addWithInfo('Image', () => <Image />);
