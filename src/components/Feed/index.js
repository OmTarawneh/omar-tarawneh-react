import React from 'react';
import { Item, Wrapper, List } from 'components/Feed/Feed.style';

function Feed(props) {
  // eslint-disable-next-line react/prop-types
  const { tag, setTag, setBlogPosts } = props;
  // eslint-disable-next-line react/prop-types
  const { setCount, offset } = props;
  const toggle = () => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/api/v1/blog?limit=5&offset=${offset}`,
        {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const result = await response.json();
      setTag(null);
      setBlogPosts(result.data);
      setCount(result.itemsCount);
    };
    fetchData();
  };
  return (
    <Wrapper>
      <List>
        <Item onClick={toggle}>Global Feed</Item>
        {tag ? <Item>{tag}</Item> : <></>}
      </List>
    </Wrapper>
  );
}

export default Feed;
