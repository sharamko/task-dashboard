import { TagTr, ThTag, Thead } from './tableHeader.styled';

const TableHeader = ({ customers }) => {
  return (
    <>
      <Thead>
        <TagTr>
          {Object.keys(customers[0]).map((col) => (
            <ThTag key={`${col}_key`} txtAlign={col}>
              {col[0].toUpperCase() + col.slice(1)}
            </ThTag>
          ))}
        </TagTr>
      </Thead>
    </>
  );
};

export default TableHeader;
