
import { Menu } from 'semantic-ui-react';
import LinkMenuItem from './link/MenuItem';

export default () => (
  <Menu
    fixed="left"
    inverted
    vertical
  >
    <LinkMenuItem name="home" href="/" active />
    <Menu.Item name="" />
  </Menu>
);
