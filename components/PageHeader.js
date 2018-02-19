import { Header, Icon } from 'semantic-ui-react';

export default ({ children, icon }) => (
  <Header as="h1">
    <Icon name={icon} circular />
    {` ${children}`}
  </Header>
);

