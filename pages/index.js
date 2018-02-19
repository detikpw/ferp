import { Divider, Table } from 'semantic-ui-react';
import URI from 'urijs';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import TableContent from '../components/table/ColumnContent';
import LinkButton from '../components/link/Button';
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
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map(({
          id,
          name,
          username,
          email,
          phone,
          website,
          company,
        }) => (
          <Table.Row key={id}>
            <Table.Cell>
              <TableContent>
                {id}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {name}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {username}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {email}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {phone}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent link={`http://www.${website}`}>
                {website}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                {company.name}
              </TableContent>
            </Table.Cell>
            <Table.Cell>
              <TableContent>
                <LinkButton href={new URI('/posts').addSearch({ userId: id }).toString()} color="green">
                  {"User's Posts"}
                </LinkButton>
                <Divider horizontal />
                <LinkButton href={new URI('/albums').addSearch({ userId: id }).toString()} color="green">
                  {"User's Albums"}
                </LinkButton>
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
