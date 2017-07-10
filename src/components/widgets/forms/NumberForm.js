import React from 'react';
import { Form } from 'semantic-ui-react';

const Number = ({ name, value, onChange, label }) => (

   <Form.Field>
      <label htmlFor={name}>{label}</label>
      <Form.Input
        id={name}
        className="ui input"
        width={2}
        type="number"
        value={value}
        onChange={onChange}
      />
    </Form.Field>
);

export default Number;
