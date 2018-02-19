import { shallow } from 'enzyme';
import React from 'react';
import { Table } from 'semantic-ui-react';
import { USERS, ALBUMS } from '../../constants/dummy-data';

import Albums from '../../pages/albums.js';
import ColumnContent from '../../components/table/ColumnContent';

const getUser = id => users => users.find(user => user.id === id);

describe('Albums', () => {
  const albums = shallow(<Albums
    user={getUser(ALBUMS[0].userId)(USERS)}
    albums={ALBUMS}
  />);
  describe('User can view list of albums for each user', () => {
    it('show some album field', () => {
      expect(albums.find(Table.Header).children().containsAllMatchingElements([
        <Table.HeaderCell>ID</Table.HeaderCell>,
        <Table.HeaderCell>Title</Table.HeaderCell>,
      ])).toEqual(true);
    });
    const tableRows = albums.find(Table.Body).children();
    it('Show all albums', () => {
      expect(tableRows).toHaveLength(ALBUMS.length);
    });
    it('Show id for each album', () => {
      expect(tableRows.map(row =>
        row.find(ColumnContent).first().children().text()))
        .toEqual(ALBUMS.map(({ id }) => id.toString()));
    });
    it('Show title for each album', () => {
      expect(tableRows.map(row =>
        row.find(ColumnContent).at(1).children().text())).toEqual(ALBUMS.map(({ title }) => title));
    });
  });
});
