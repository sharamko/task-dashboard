import { CloseMenuBtn, SideMenuContainer } from './index.styled';
import SideMenuTitle from './sideMenuTitle';
import logo from '../../assets/sideMenu/logo.svg';
import Navigation from './navigation';
import SideMenuProfileInfo from './sideMenuProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../store/slice';

const SideMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.reducer.userInfo.name);
  const userJob = useSelector((state) => state.reducer.userInfo.job);
  const userImg = useSelector((state) => state.reducer.userInfo.img);
  const menu = useSelector((state) => state.reducer.menu);
  return (
    <SideMenuContainer menu={menu}>
      <CloseMenuBtn onClick={() => dispatch(setMenu(!menu))} />
      <SideMenuTitle img={logo} title="Dashboard" version="v.01" />
      <Navigation />
      {userName ? (
        <SideMenuProfileInfo
          userName={userName}
          userJob={userJob}
          userImg={userImg}
        />
      ) : null}
    </SideMenuContainer>
  );
};

export default SideMenu;
