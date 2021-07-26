import React, { useEffect, useState } from 'react';
import { getAllBlogs, getBlogByTag } from 'services/blogs';
import Tags from 'components/Tags';
import Post from 'components/Post';
import Feed from 'components/Feed';
import Pages from 'components/Pagination';
import { Wrapper } from './Blog.style';

/**
 * Top level component to wrap up the feed, post and tags and exchange the data between them.
 * @component
 *
 * @return {JSX}
 *
 */
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  /**
   * Wrapper function to  Handle GET Requests for All blog, Blog by tag, Feed and the setter states.
   *
   * @param {Function} callback
   * @param  {...any}  rest
   *
   * @return {Promise<void>}
   */
  const handleSetter = async (callback, ...rest) => {
    const response = await callback(...rest);
    setBlogs(response.data.blogs);
    setCount(response.data.itemsCount);
  };

  useEffect(() => {
    const getBlogs = async () => {
      /**
       * If the Global Feed is active get all blogs, else get blog by active tag.
       */
      if (!activeTag) {
        await handleSetter(getAllBlogs, offset);
      } else {
        await handleSetter(getBlogByTag, activeTag, offset);
      }
    };
    getBlogs();
  }, [offset, activeTag]);

  /**
   * Change the offset depending on the page number.
   *
   * @param {Number} num
   */
  const page = (num) => {
    setOffset(num);
  };

  /**
   * Change the active feed when the tag name change.
   *
   * @param {String} tagName The tag to change the feed for.
   */
  const changeFeed = async (tagName) => {
    setOffset(0);
    setActiveTag(tagName);

    await handleSetter(getBlogByTag, tagName, offset);
  };

  /**
   * Change the active feed to global.
   */
  const changeGlobalFeed = async () => {
    setActiveTag(null);
    setOffset(0);

    await handleSetter(getAllBlogs, offset);
  };

  return (
    <>
      <Wrapper>
        <Feed tag={activeTag} changeGlobalFeed={changeGlobalFeed} />
        {blogs.map((blog) => (
          <Post data={blog} key={blog.id} />
        ))}
        <Pages page={page} offset={offset} count={count} />
      </Wrapper>
      <Tags changeFeed={changeFeed} />
    </>
  );
}

export default Blog;
