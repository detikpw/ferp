import { shallow } from 'enzyme';
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { PHOTOS } from '../../constants/dummy-data';

import Photo from '../../pages/photo.js';

describe('Photo', () => {
  const photo = shallow(<Photo
    photo={PHOTOS[0]}
  />);
  describe('User can view photo detail', () => {
    it('Show photo detail', () => {
      expect(photo.find(Card).children().containsAllMatchingElements([
        <Image src={PHOTOS[0].url} />,
        <Card.Content>
          <Card.Header>
            {PHOTOS[0].title}
          </Card.Header>
        </Card.Content>,
      ])).toEqual(true);
    });
  });
});

