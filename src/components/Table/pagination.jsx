import {
  PaginationContainer,
  PaginationDots,
  PaginationItem,
} from './pagination.styled';

const Pagination = () => {
  return (
    <PaginationContainer>
      <PaginationItem>{'<'}</PaginationItem>
      <PaginationItem active={true}>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>
      <PaginationDots>...</PaginationDots>
      <PaginationItem>40</PaginationItem>
      <PaginationItem>{'>'}</PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
