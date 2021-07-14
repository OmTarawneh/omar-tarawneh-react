import React, { useState } from 'react';
import useFetch from 'Hooks/useFetch';
import Tags from 'components/Tags';
import Post from 'components/Post';
import Feed from 'components/Feed';
import Pages from 'components/Pagination';
import { Wrapper } from './Blog.style';

const API = process.env.REACT_APP_URL;

/**
 * Top level component to wrap up the feed, post and tags and exchange the data between them.
 * @component
 * @example
 * return(
 *  <Blog />
 * );
 */
function Blog() {
  const [offset, setOffset] = useState(0);
  const [tag, setTag] = useState('');
  const [url, setUrl] = useState(`${API}/blog?limit=5&offset=${offset}`);
  const [response] = useFetch(url);
  return (
    <>
      <Wrapper>
        <Feed setTag={setTag} setUrl={setUrl} tag={tag} />
        {response?.data.map((post) => (
          <Post data={post} key={post.id} />
        ))}
        <Pages
          count={response?.itemsCount}
          offset={offset}
          setOffset={setOffset}
          setUrl={setUrl}
        />
      </Wrapper>
      <Tags setTag={setTag} setUrl={setUrl} />
    </>
  );
}

export default Blog;
