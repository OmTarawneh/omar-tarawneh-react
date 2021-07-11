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
      setBlogPosts(result.data);
      setCount(result.itemsCount);
    };
    fetchData();
  }, [offset]);
  return (
    <>
      {blogPosts ? (
        <>
          <Wrapper>
            <Feed
              tag={tag}
              setTag={setTag}
              setBlogPosts={setBlogPosts}
              setCount={setCount}
              offset={offset}
            />
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
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default Blog;
