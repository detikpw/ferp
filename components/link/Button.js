import { Button } from 'semantic-ui-react';
import Link from 'next/link';

export default ({ href, children, ...other }) => (
  <Button {...other}>
    <Link href={href}>
      <a style={{ color: '#fff' }}>{children}</a>
    </Link>
  </Button>
);
