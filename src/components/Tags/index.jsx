import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
// import useFetch from 'Hooks/useFetch';
import { Aside, Tag } from 'components/Tags/Tag.style';
import { getAllTags } from 'services/blogs';
// import { If, Then, Else } from 'react-if';

// const API = process.env.REACT_APP_URL;

/**
 * Tag component to that will render the unique tags and set the active one.
 *
 * @component
 *
 * @return {JSX.Element}
 */
function Tags({ changeFeed }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const data = await getAllTags();
      setTags(data.data);
    };
    getTags();
  }, []);

  return (
    <Aside>
      {tags.map((tag) => (
        <Tag onClick={() => changeFeed(tag.name)} key={tag.id}>
          #{tag.name}
        </Tag>
      ))}
    </Aside>
  );
}
Tags.propTypes = {
  changeFeed: PropType.func.isRequired,
};

export default Tags;
