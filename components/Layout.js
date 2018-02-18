import Head from 'next/head';
import { Container, Grid } from 'semantic-ui-react';
import MainNav from './MainNav';

export default ({ children }) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
      />
    </Head>
    <Container style={{ marginTop: '2em' }}>
      <Grid columns={2}>
        <Grid.Row>
          <MainNav />
          <Grid.Column width={14} floated="right">
            { children }
          </Grid.Column>
          {/* <Grid.Column width={12}>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);
