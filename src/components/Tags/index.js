import React from 'react';
import PropType from 'prop-types';
import useFetch from 'Hooks/useFetch';
import { Aside, Tag } from 'components/Tags/Tag.style';
import { If, Then, Else } from 'react-if';

const API = process.env.REACT_APP_URL;

/**
 * Tag component to that will render the unique tags and set the active one.
 *
 * @component
 * @example
 * return (
 *  <Tags setTags={setTag}  setUrl={setUrl} />
 * );
 */
function Tags({ setTag, setUrl }) {
  const [response, loading] = useFetch(`${API}/tag`);
  return (
    <Aside>
      <p>Popular Tags</p>
      <If condition={loading}>
        <Then>
          <p>loading</p>
        </Then>
        <Else>
          {response?.data?.map((tag) => (
            <Tag
              onClick={() => {
                setTag(tag.name);
                setUrl(`${API}/blog/${tag.name}/tag?limit=5&offset=0`);
              }}
              key={tag.id}
            >
              {tag.name}
            </Tag>
          ))}
        </Else>
      </If>
    </Aside>
  );
}
Tags.propTypes = {
  /**
   * Tag setter for tha active tag.
   */
  setTag: PropType.func.isRequired,
  /**
   * Url setter for data to be fetch.
   */
  setUrl: PropType.func.isRequired,
};

export default Tags;
