import React from 'react';
import { Link } from 'react-router-dom';

function Notfoundpage() {
  return (
    <div>
      <h1>Notfound page</h1>
      <p1>
        Go to <Link to="/">Home page</Link>{' '}
      </p1>
    </div>
  );
}

export default Notfoundpage;
