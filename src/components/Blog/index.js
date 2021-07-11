import React, { useEffect, useState } from 'react';
import Tags from 'components/Tags';
import Post from 'components/Post';
import Feed from 'components/Feed';
import Pages from 'components/Pagination';
import { Wrapper } from './Blog.style';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [tag, setTag] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/blog?limit=5&offset=${offset}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setBlogPosts(result.data);
        setCount(result.itemsCount);
      })
      .catch((err) => console.error(err.message));
  }, [offset]);
  return (
    <>
      <Wrapper>
        <Feed tag={tag} setTag={setTag} />
        {blogPosts.map((post) => (
          <Post data={post} key={post.id} />
        ))}
        <Pages setOffset={setOffset} offset={offset} count={count} />
      </Wrapper>
      <Tags
        setBlogPosts={setBlogPosts}
        setCount={setCount}
        offset={offset}
        setTag={setTag}
      />
    </>
  );
}

export default Blog;
