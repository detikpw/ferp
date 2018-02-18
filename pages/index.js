import { Table, Header } from 'semantic-ui-react';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import fetch from '../lib/fetch';

const Homepage = ({ users }) => (
  <Layout>
    <PageHeader icon="users">Users</PageHeader>
    <Table basic="very" striped celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>User Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Website</Table.HeaderCell>
          <Table.HeaderCell>Company</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map(user => (
          <Table.Row>
            <Table.Cell>
              {user.id}
            </Table.Cell>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  {user.name}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  {user.username}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  {user.email}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  {user.phone}
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as="h4">
                <Link href={`http://www.${user.website}`}>
                  <a><Header.Content>{user.website}</Header.Content></a>
                </Link>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  {user.company.name}
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Layout>
);

Homepage.getInitialProps = async () => {
  const res = await fetch('/users');
  const data = await res.data;

  return {
    users: data,
  };
};

export default Homepage;
