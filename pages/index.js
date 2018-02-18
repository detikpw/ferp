import { Table } from 'semantic-ui-react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import TableContent from '../components/table/ColumnContent';
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
              <TableContent>
                {user.name}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {user.username}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {user.email}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {user.phone}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent link={`http://www.${user.website}`}>
                {user.website}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {user.company.name}
              </TableContent>
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
