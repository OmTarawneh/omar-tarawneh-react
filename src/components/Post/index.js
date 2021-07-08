import React from 'react';
import {
  Box,
  Image,
  Preview,
  Info,
  Button,
  Paragraph,
  Body,
  Footer,
} from './Post.style';

function Post() {
  return (
    <Box>
      <Preview>
        <Info>
          <Image
            src="https://static.productionready.io/images/smiley-cyrus.jpg"
            alt="user"
          />
          <div>
            <a href="/#">username</a>
            <Paragraph>Thu Jul 08 2021</Paragraph>
          </div>
        </Info>
        <Button type="button">
          <span className="iconify" data-icon="ion-heart" data-inline="false" />
          100
        </Button>
      </Preview>
      <Body>
        <h3>Title</h3>
        <Paragraph>Content</Paragraph>
      </Body>
      <Footer>
        <Paragraph>Read more...</Paragraph>
        <ul>
          <li>
            <a href="/#">Black Live Matters</a>
          </li>
          <li>
            <a href="/#">Humanity</a>
          </li>
        </ul>
      </Footer>
    </Box>
  );
}

export default Post;
