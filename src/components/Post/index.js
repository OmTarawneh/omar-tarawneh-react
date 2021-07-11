import React from 'react';
import PropTypes from 'prop-types';

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

function Post({ data }) {
  const { user, tags } = data;
  return (
    <Box>
      <Preview>
        <Info>
          <Image src={user.image} alt="user" />
          <div>
            <a href="/#">{user.firstName}</a>
            <Paragraph>{new Date(data.createdAt).toDateString()}</Paragraph>
          </div>
        </Info>
        <Button type="button">
          <span className="iconify" data-icon="ion-heart" data-inline="false" />
          {data.likes}
        </Button>
      </Preview>
      <Body>
        <h3>{data.title}</h3>
        <Paragraph>{data.content}</Paragraph>
      </Body>
      <Footer>
        <Paragraph>Read more...</Paragraph>
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <a href="/#">{tag.name}</a>
            </li>
          ))}
        </ul>
      </Footer>
    </Box>
  );
}
Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Post;
