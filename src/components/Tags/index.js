import React, { useEffect, useState } from 'react';
import { Aside, Tag } from 'components/Tags/Tag.style';

function Tags(props) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/api/v1/tag', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTags(result.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  // eslint-disable-next-line react/prop-types
  const { setBlogPosts, setCount, offset } = props;
  // eslint-disable-next-line react/prop-types
  const { setTag } = props;
  const handleTag = (name) => {
    fetch(
      `http://localhost:4000/api/v1/blog/${name}/tag?limit=5&offset=${offset}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        // eslint-disable-next-line comma-dangle
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setBlogPosts(result.data);
        setCount(result.itemsCount);
        setTag(name);
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <Aside>
      <p>Popular Tags</p>
      {tags.map((tag) => (
        <Tag onClick={() => handleTag(tag.name)} key={tag.id}>
          {tag.name}
        </Tag>
      ))}
    </Aside>
  );
}

export default Tags;
