import { Image } from 'semantic-ui-react';
import URI from 'urijs';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import fetch from '../lib/fetch';

const Photos = ({ album, photos }) => (
  <Layout>
    <PageHeader icon="photo">{album.title}</PageHeader>
    <Image.Group size="tiny">
      {photos.map(({ id, thumbnailUrl }) => (
        <Link href={{ pathname: 'photo', query: { id } }} key={id}>
          <a><Image src={thumbnailUrl} /></a>
        </Link>
      ))}
    </Image.Group>
  </Layout>
);

Photos.getInitialProps = async (context) => {
  const { albumId } = context.query;
  const photosRes = await fetch(new URI('/photos').addSearch({ albumId }).toString());
  const photos = await photosRes.data;
  const albumRes = await fetch(`/albums/${albumId}`);
  const album = await albumRes.data;

  return {
    photos,
    album,
  };
};

export default Photos;

