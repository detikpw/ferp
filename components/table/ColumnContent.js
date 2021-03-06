import Link from 'next/link';
import { Header } from 'semantic-ui-react';
import { either, pipe } from 'ramda';
import { isNumber, isString } from '../../lib/type';

const wrapLink = link => (label) => {
  if (link) {
    return (
      <Link href={link}>
        <a>{label}</a>
      </Link>
    );
  }
  return label;
};

const wrapLabel = (label) => {
  if (isNumber(label)) return label;
  return (<Header.Content>{label}</Header.Content>);
};

const wrapContent = (content) => {
  if (isNumber(content)) return content;
  return (
    <Header as="h4">
      {content}
    </Header>
  );
};

export default ({ link, children }) => {
  if (!either(isNumber, isString)(children)) return children;
  return pipe(
    wrapLabel,
    wrapLink(link),
    wrapContent,
  )(children);
};
