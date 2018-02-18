import { Button } from 'semantic-ui-react';
import Link from 'next/link';

export default ({
  alias,
  href,
  children,
  ...other
}) => (
  <Button {...other}>
    <Link href={href} as={alias}>
      <a style={{ color: '#fff' }}>{children}</a>
    </Link>
  </Button>
);
