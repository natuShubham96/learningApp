import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Footer,
  FooterTab,
  Button,
  Left,
  Thumbnail,
  Right,
  Body,
} from 'native-base';

export default class ItemList extends Component {
  renderListContent = (uri, title, steps) => {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: '',
            }}
          />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note numberOfLines={1}>
            {steps}
          </Text>
        </Body>
      </ListItem>
    );
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.renderListContent(' ', 'Homemade Chai', '5 steps')}
            {this.renderListContent(' ', 'Wada Pav', '11 steps')}
            {this.renderListContent(' ', 'Bombay Sandwich', '13 steps')}
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>New Recipe</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
