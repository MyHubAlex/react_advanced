import React from 'react';
import { map } from 'lodash';
import { Form, Radio } from 'semantic-ui-react';

const RadioForm = ({ name, labels, values, value, onChange }) => (
  <Form.Group inline>
    <label>{name}</label>
    {map(labels, (item, id) => (
             <Form.Field
              control={Radio}
              label={item}
              value={values[id]}
              checked={value === values[id]}
              onChange={onChange}
              />)
            )}
  </Form.Group>
);

export default RadioForm;
