import { shallow } from 'enzyme';
import React from 'react';
import { Table } from 'semantic-ui-react';
import { USERS } from '../dummy-data';

import Homepage from '../../pages/index.js';
import ColumnContent from '../../components/table/ColumnContent';

describe('Homepage', () => {
  const homepage = shallow(<Homepage users={USERS} />);
  describe('User can view list of users', () => {
    it('show some users field', () => {
      expect(homepage.find(Table.Header).children().containsAllMatchingElements([
        <Table.HeaderCell>ID</Table.HeaderCell>,
        <Table.HeaderCell>Name</Table.HeaderCell>,
        <Table.HeaderCell>User Name</Table.HeaderCell>,
        <Table.HeaderCell>Email</Table.HeaderCell>,
        <Table.HeaderCell>Phone</Table.HeaderCell>,
        <Table.HeaderCell>Website</Table.HeaderCell>,
        <Table.HeaderCell>Company</Table.HeaderCell>,
        <Table.HeaderCell>Action</Table.HeaderCell>,
      ])).toEqual(true);
    });
    const tableRows = homepage.find(Table.Body).children();
    it('Show all users', () => {
      expect(tableRows).toHaveLength(USERS.length);
    });
    it('Show id for each user', () => {
      expect(tableRows.map(row => row.find(ColumnContent).first().children().text())).toEqual(USERS.map(({ id }) => id.toString()));
    });
    it('Show name for each user', () => {
      expect(tableRows.map(row => row.find(ColumnContent).at(1).children().text())).toEqual(USERS.map(({ name }) => name));
    });
    it('Show username for each user', () => {
      expect(tableRows.map(row => row.find(ColumnContent).at(2).children().text())).toEqual(USERS.map(({ username }) => username));
    });
    it('Show email for each user', () => {
      expect(tableRows.map(row => row.find(ColumnContent).at(3).children().text())).toEqual(USERS.map(({ email }) => email));
    });
  });
});
