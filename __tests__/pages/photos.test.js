import { shallow } from 'enzyme';
import React from 'react';
import { Image } from 'semantic-ui-react';
import { ALBUMS, PHOTOS } from '../../constants/dummy-data';

import Photos from '../../pages/photos.js';

const getAlbum = id => albums => albums.find(album => album.id === id);

describe('Photos', () => {
  const photos = shallow(<Photos
    album={getAlbum(PHOTOS[0].albumId)(ALBUMS)}
    photos={PHOTOS}
  />);
  describe('User can view list of photos for each album', () => {
    it('Show all photos', () => {
      expect(photos.find(Image.Group).children()).toHaveLength(PHOTOS.length);
    });
  });
});
