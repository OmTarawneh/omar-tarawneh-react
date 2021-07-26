import React from 'react';
import PropType from 'prop-types';
import { Item, Wrapper, List } from 'components/Feed/Feed.style';

// const API = process.env.REACT_APP_URL;
/**
 * Feed component that will return the active feed - Global or Tag name.
 *
 * @component
 * @example
 * return (
 *  <Feed tag={tag} setTag={setTag} setUrl={setUrl}  />
 * )
 *
 */
function Feed({ tag, changeGlobalFeed }) {
  return (
    <Wrapper>
      <List>
        {tag ? (
          <>
            <Item onClick={changeGlobalFeed}>Global Feed</Item>
            <Item color="active">{`# ${tag}`}</Item>
          </>
        ) : (
          <Item color="active">Global Feed</Item>
        )}
      </List>
    </Wrapper>
  );
}

Feed.propTypes = {
  tag: PropType.string.isRequired,
  changeGlobalFeed: PropType.func.isRequired,
};

export default Feed;
