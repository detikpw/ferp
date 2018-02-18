import Link from 'next/link';
import { Header } from 'semantic-ui-react';

const getContent = ({ link, children }) => {
  const Label = <Header.Content>{children}</Header.Content>;
  if (link) {
    return (
      <Link href={link}>
        <a>{Label}</a>
      </Link>
    );
  }
  return Label;
};

export default ({ link, children }) => (
  <Header as="h4">
    <Header.Content>
      {getContent({ link, children })}
    </Header.Content>
  </Header>
);
