import PropType from 'prop-types';
import React from 'react';
import { Item, Wrapper, List } from 'components/Feed/Feed.style';

const API = process.env.REACT_APP_URL;
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
function Feed({ tag, setTag, setUrl }) {
  const handleGlobal = () => {
    setTag('');
    setUrl(`${API}/blog?limit=5&offset=0`);
  };
  return (
    <Wrapper>
      <List>
        <Item onClick={handleGlobal}>Global Feed</Item>
        {tag ? <Item>{`# ${tag}`}</Item> : <></>}
      </List>
    </Wrapper>
  );
}
Feed.propTypes = {
  /**
   * Tag setter.
   */
  setTag: PropType.func.isRequired,
  /**
   * Url setter.
   */
  setUrl: PropType.func.isRequired,
  /**
   * Tag name.
   */
  tag: PropType.string.isRequired,
};

export default Feed;
