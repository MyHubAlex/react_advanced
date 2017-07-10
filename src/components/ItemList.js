import React from 'react';
import { Segment, Header, Container, Button, Icon, Image , Item, Card, Rating, Divider } from 'semantic-ui-react'

const ItemList = ({ name, src, price, comments, raiting, smallDescription }) => (
  <div className="ui link cards">
    <Card fluid>
      <Image src={src} />
      <Card.Content>
        <Card.Header>
          {name}
          <div>{price}<Icon name="ruble" /></div>
        </Card.Header>
      </Card.Content>
    <Card.Content extra>
        <div>{smallDescription}</div>
        <Icon name='comment' />{comments} комментариев
        <span className="right floated" >
          <Rating icon='star' defaultRating={raiting} maxRating={5} />
        </span>
        <Header>
        <Button basic >Подробнее</Button>
        </Header>
    </Card.Content>
    </Card>
  </div>
  );

export default ItemList;
