import { Table } from 'semantic-ui-react';
import URI from 'urijs';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import TableContent from '../components/table/ColumnContent';
import fetch from '../lib/fetch';

const Posts = ({ posts, user }) => (
  <Layout>
    <PageHeader icon="sticky note">Posts by {user.name}</PageHeader>
    <Table basic="very" striped celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Body</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {posts.map(({
          id,
          title,
          body,
        }) => (
          <Table.Row key={id}>
            <Table.Cell>
              <TableContent>
                {id}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {title}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {body}
              </TableContent>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Layout>
);

Posts.getInitialProps = async (context) => {
  const { userId } = context.query;
  const userRes = await fetch(`/users/${userId}`);
  const user = await userRes.data;
  const postsRes = await fetch(new URI('/posts').addSearch({ userId }).toString());
  const posts = await postsRes.data;

  return {
    posts,
    user,
  };
};

export default Posts;

