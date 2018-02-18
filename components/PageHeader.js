import { Header, Icon } from 'semantic-ui-react';

export default ({ children, icon }) => (
  <Header>
    <Icon name={icon} circular />
    {` ${children}`}
  </Header>
);

