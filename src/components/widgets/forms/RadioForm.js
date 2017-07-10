import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

const Radio = ({ label, onChange }) => (
  <Form.Field>
    <Checkbox radio label={label} onChange={onChange} />
  </Form.Field>
);

export default Radio;
