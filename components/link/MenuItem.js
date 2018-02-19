import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

export default ({
  alias,
  href,
  label,
  ...other
}) => (
  <Link href={href} as={alias}>
    <a style={{ color: '#fff' }}><Menu.Item name={label} {...other} /></a>
  </Link>
);
