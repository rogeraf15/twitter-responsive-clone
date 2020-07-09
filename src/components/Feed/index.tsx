import React from 'react';

import Twett from '../Tweet';
import { Container, Tab, Twetts } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
        <Tab>Tweets</Tab>

        <Twetts>
            <Twett />
            <Twett />
            <Twett />
            <Twett />
            <Twett />
            <Twett />
        </Twetts>
    </Container>
  );
}

export default Feed;