import { shallow } from 'enzyme';
import React from 'react';
import { Table } from 'semantic-ui-react';
import { USERS, POSTS } from '../../constants/dummy-data';

import Posts from '../../pages/posts.js';
import ColumnContent from '../../components/table/ColumnContent';

const getUser = id => users => users.find(user => user.id === id);

describe('Posts', () => {
  const posts = shallow(<Posts
    user={getUser(POSTS[0].userId)(USERS)}
    posts={POSTS}
  />);
  describe('User can view list of posts for each user', () => {
    it('show some post field', () => {
      expect(posts.find(Table.Header).children().containsAllMatchingElements([
        <Table.HeaderCell>ID</Table.HeaderCell>,
        <Table.HeaderCell>Title</Table.HeaderCell>,
        <Table.HeaderCell>Body</Table.HeaderCell>,
      ])).toEqual(true);
    });
    const tableRows = posts.find(Table.Body).children();
    it('Show all posts', () => {
      expect(tableRows).toHaveLength(POSTS.length);
    });
    it('Show id for each post', () => {
      expect(tableRows.map(row =>
        row.find(ColumnContent).first().children().text()))
        .toEqual(POSTS.map(({ id }) => id.toString()));
    });
    it('Show title for each post', () => {
      expect(tableRows.map(row =>
        row.find(ColumnContent).at(1).children().text())).toEqual(POSTS.map(({ title }) => title));
    });
    it('Show body for each post', () => {
      expect(tableRows.map(row =>
        row.find(ColumnContent).at(2).children().text()))
        .toEqual(POSTS.map(({ body }) => body));
    });
  });
});
