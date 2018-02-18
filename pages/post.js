import { Segment } from 'semantic-ui-react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import fetch from '../lib/fetch';

const Post = ({ post, user }) => (
  <Layout>
    <Segment raised>
      <PageHeader icon="sticky note">{post.title} by {user.name}</PageHeader>
      {post.body}
    </Segment>
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const postRes = await fetch(`/posts/${id}`);
  const post = await postRes.data;
  const userRes = await fetch(`users/${post.userId}`);
  const user = await userRes.data;

  return {
    post,
    user,
  };
};

export default Post;

