import React from 'react';
import { Wrapper, Button } from 'components/Pagination/pagination.style';

function Pages(props) {
  // eslint-disable-next-line react/prop-types
  const { setOffset, offset, count } = props;
  const handleNext = () => {
    setOffset(offset + 5);
  };
  const handlePrevious = () => {
    setOffset(offset - 5);
  };
  return (
    <Wrapper>
      {offset ? (
        <Button onClick={handlePrevious} type="button">
          Previous
        </Button>
      ) : (
        <></>
      )}
      {offset + 5 < count ? (
        <Button onClick={handleNext} type="button">
          Next
        </Button>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}

export default Pages;
