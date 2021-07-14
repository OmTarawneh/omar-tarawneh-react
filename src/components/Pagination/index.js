import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { Wrapper, Button } from 'components/Pagination/pagination.style';

const API = process.env.REACT_APP_URL;
/**
 * Component that will render the number of pages with next and previous buttons.
 *
 * @component
 * @example
 * return (
 *  <Pages offset={offset} setOffset={setOffset} count={count} setUrl={setUrl} />
 * )
 *
 */
function Pages({ offset, setOffset, count, setUrl }) {
  const [num, setNum] = useState(0);
  const [page, setPage] = useState(1);
  /**
   * Function that increase the offset by 5 to move to the next page.
   */
  const handleNext = () => {
    if (page < num) setPage(page + 1);
    if (offset + 5 < count) setOffset(offset + 5);
  };
  /**
   * Function that decrease the offset by 5 to move to the previous page.
   */
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
    if (offset) setOffset(offset - 5);
  };
  /**
   * When ever the offset is changed change the offset query in the url.
   */
  useEffect(() => {
    let canceled = false;
    if (!canceled) {
      setUrl(`${API}/blog?limit=5&offset=${offset}`);
    }
    return () => {
      canceled = true;
    };
  }, [offset, setUrl]);

  /**
   * When the count is defined calculate the number of pages.
   */
  useEffect(() => {
    if (count) {
      setNum(Math.floor(count / 5));
    }
  }, [count]);

  return (
    <Wrapper>
      <Button onClick={handlePrevious} type="button">
        Previous
      </Button>
      <p>
        {page}-{num}
      </p>
      <Button onClick={handleNext} type="button">
        Next
      </Button>
    </Wrapper>
  );
}

Pages.propTypes = {
  /**
   * Number of blog posts.
   */
  count: PropType.number.isRequired,
  /**
   * Offset number of pagination.
   */
  offset: PropType.number.isRequired,
  /**
   * Offset setter.
   */
  setOffset: PropType.func.isRequired,
  /**
   * Url setter.
   */
  setUrl: PropType.func.isRequired,
};
export default Pages;
