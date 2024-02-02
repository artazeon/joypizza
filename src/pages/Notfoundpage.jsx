import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const NotfoundPage = () => (
  <Layout>
    <h1>Notfound page</h1>
    <p>
      Go to <Link to="/">Home page</Link>{' '}
    </p>
  </Layout>
);

export default NotfoundPage;
