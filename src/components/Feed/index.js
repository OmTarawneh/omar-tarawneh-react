import React from 'react';
import { Item, Wrapper, List } from 'components/Feed/Feed.style';

function Feed(props) {
  // eslint-disable-next-line react/prop-types
  const { tag, setTag } = props;
  const toggle = () => {
    setTag(null);
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
