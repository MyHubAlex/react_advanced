import React from 'react';
import Item from 'components/ItemList';
import { Grid, Container } from 'semantic-ui-react';
import _ from 'lodash';
import feathers from 'feathers/client';
import rest from 'feathers-rest/client';
import hooks from 'feathers-hooks';
import superagent from 'superagent';

const host = 'http://localhost:3030';

const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks());

const excursion = app.service('excursion');

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list: [] };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    excursion.find({
       query: {
         $limit: 10
       }
     }).then(data => this.setState({ list: data.data }));
  }

  render() {
    return (<Container>
      <Grid columns={3} relaxed >
      {_.map(this.state.list, (item) => (
          <Grid.Column>
             <Item {...item} />
          </Grid.Column>
        )
      )}
      </Grid>
    </Container>);
  }
}

export default List;
