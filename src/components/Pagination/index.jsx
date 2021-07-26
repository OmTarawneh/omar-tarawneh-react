import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { Wrapper, Button } from 'components/Pagination/pagination.style';

/**
 * Component that will render the number of pages with next and previous buttons.
 *
 * @component
 *
 * @return {JSX.Element}
 *
 */
function Pages({ page, offset, count }) {
  const [num, setNum] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  /**
   * Function that increase the offset by 5 to move to the next page.
   */
  const handleNext = () => {
    if (pageNum < num) setPageNum(pageNum + 1);
    if (offset + 5 < count) page(offset + 5);
  };

  /**
   * Function that decrease the offset by 5 to move to the previous page.
   */
  const handlePrevious = () => {
    if (pageNum > 1) setPageNum(pageNum - 1);
    if (offset) page(offset - 5);
  };

  /**
   * When the count is defined calculate the number of pages.
   */
  useEffect(() => {
    if (count) {
      setNum(Math.ceil(count / 5));
      setPageNum(1);
    }
  }, [count]);

  return (
    <Wrapper>
      <Button onClick={handlePrevious} type="button">
        Previous
      </Button>
      <p>
        {pageNum} - {num}
      </p>
      <Button onClick={handleNext} type="button">
        Next
      </Button>
    </Wrapper>
  );
}

Pages.propTypes = {
  page: PropType.func.isRequired,
  offset: PropType.number.isRequired,
  count: PropType.number.isRequired,
};

export default Pages;
