import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../App.styled';
import { setSearchValue } from '../../store/slice';
import {
  TableBottom,
  TableContainer,
  TableDescription,
  TableMain,
  TableSearch,
  TableTop,
  TitleActiveCustomers,
  TitleAllCustomers,
} from './index.styled';
import TableBody from './tableBody';
import TableHeader from './tableHeader';
import Pagination from './pagination';

const Table = ({ customers }) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.reducer.searchValue);
  const searchResult =
    searchValue &&
    customers.filter(
      (obj) =>
        obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.company.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.country.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.status.toLowerCase().includes(searchValue.toLowerCase())
    );
  return customers ? (
    <TableContainer>
      <TableTop>
        <div>
          <TitleAllCustomers>All Customers</TitleAllCustomers>
          <TitleActiveCustomers>Active Members</TitleActiveCustomers>
        </div>
        <TableSearch
          placeholder={'Search'}
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value.trim()))}
        />
      </TableTop>
      <TableMain>
        <TableHeader customers={customers} />
        <TableBody customers={searchValue !== '' ? searchResult : customers} />
      </TableMain>
      {!searchValue && (
        <TableBottom>
          <TableDescription>
            Showing data 1 to 8 of 256K entries
          </TableDescription>
          <Pagination />
        </TableBottom>
      )}
    </TableContainer>
  ) : (
    <Loading />
  );
};

export default Table;
