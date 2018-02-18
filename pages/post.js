import { Comment, Header } from 'semantic-ui-react';
import URI from 'urijs';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import Paper from '../components/containers/Paper';
import fetch from '../lib/fetch';
import { DEFAULT_AVATAR } from '../constants/site-config';

const Post = ({ comments, post, user }) => (
  <Layout>
    <Paper>
      <PageHeader icon="sticky note">{post.title} by {user.name}</PageHeader>
      {post.body}
    </Paper>
    <Paper>
      <Comment.Group>
        <Header as="h3" dividing>Comments</Header>
        { comments.map(({
          id,
          email,
          name,
          body,
        }) => (
          <Comment key={id}>
            <Comment.Avatar src={DEFAULT_AVATAR} />
            <Comment.Content>
              <Comment.Author>
                {name}
              </Comment.Author>
              <Comment.Author>
                {email}
              </Comment.Author>
              <Comment.Text>{body}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    </Paper>
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const postRes = await fetch(`/posts/${id}`);
  const post = await postRes.data;
  const commentsRes = await fetch(new URI('/comments').addSearch({ postId: id }).toString());
  const comments = await commentsRes.data;
  const userRes = await fetch(`users/${post.userId}`);
  const user = await userRes.data;

  return {
    comments,
    post,
    user,
  };
};

export default Post;

