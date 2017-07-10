import React from 'react';
import Date from 'components/widgets/forms/DateForm';
import List from 'components/List';

const Text = (props) => (
    <div>
      <Date />
      <div>{props.children}</div>
      <List />
    </div>
);


const App = () => (
  <Text>тест</Text>
);

export default App;
