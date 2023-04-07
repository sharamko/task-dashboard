import Table from '../Table';
import Greetings from './greetings';
import { BurgerBtn, Fog, MainContainer } from './index.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCustomers, getUserInfo } from '../../api';
import { setCustomers, setMenu, setUserInfo } from '../../store/slice';

const Main = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.reducer.userInfo.name);
  const customers = useSelector((state) => state.reducer.customers);
  const menu = useSelector((state) => state.reducer.menu);
  useEffect(() => {
    getUserInfo().then((data) => dispatch(setUserInfo(data)));
    getCustomers().then((data) => dispatch(setCustomers(data)));
  }, []);

  return (
    <MainContainer>
      <Fog menu={menu} onClick={() => dispatch(setMenu(!menu))} />
      <BurgerBtn onClick={() => dispatch(setMenu(!menu))} />
      {userName ? <Greetings userName={userName} /> : null}
      <Table customers={customers} />
    </MainContainer>
  );
};

export default Main;
