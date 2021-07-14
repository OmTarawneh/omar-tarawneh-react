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

/**
 * Post component that accept post data and render them.
 *
 * @component
 * @example
 * const data = {
 *  "id": 3,
 *  "title": "pariah's",
 *  "description": "preferences rerun repudiate",
 *  "content": "sed a total",
 *  "likes": 14,
 *  "UserId": 61,
 *  "User": {
 *      "id": 61,
 *      "firstName": "Aurora",
 *      "lastName": "Schlumberger",
 *      "email": "Korey.Wisozk97@yahoo.com",
 *      "image": "image",
 *  },
 *  "Tag": [
 *      {
 *          "id": 1,
 *          "name": "dolorous",
 *      },
 *      {
 *          "id": 5,
 *          "name": "explicable",
 *      }
 *  ] *
 * }
 * return (
 *  <Post data={data} />
 * );
 */
function Post({ data }) {
  const { User, Tag } = data;
  return (
    <Box>
      <Preview>
        <Info>
          <Image src={User.image} alt="user" />
          <div>
            <a href="/#">{User.firstName}</a>
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
          {Tag.map((tag) => (
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
  data: PropTypes.shape({
    Tag: PropTypes.arrayOf(
      PropTypes.shape({
        createdAt: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
        updatedAt: PropTypes.string,
      }),
    ),
    User: PropTypes.shape({
      createdAt: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      lastName: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.number,
    likes: PropTypes.number,
    title: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default Post;
