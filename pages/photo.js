import { Card, Image } from 'semantic-ui-react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import fetch from '../lib/fetch';

const Post = ({ photo }) => (
  <Layout>
    <PageHeader icon="photo">Photo</PageHeader>
    <Card>
      <Image src={photo.url} />
      <Card.Content>
        <Card.Header>
          {photo.title}
        </Card.Header>
      </Card.Content>
    </Card>
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const photoRes = await fetch(`/photos/${id}`);
  const photo = await photoRes.data;

  return { photo };
};

export default Post;

