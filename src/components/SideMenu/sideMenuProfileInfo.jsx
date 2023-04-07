import {
  SideMenuProfileContainer,
  SideMenuProfileJob,
  SideMenuProfileName,
  SideMenuProfileRight,
} from './sideMenuProfileInfo.styled';

const SideMenuProfileInfo = ({ userName, userJob, userImg }) => {
  return (
    <SideMenuProfileContainer>
      <img width={42} height={42} src={userImg} alt="profileImg" />
      <SideMenuProfileRight>
        <SideMenuProfileName>{userName}</SideMenuProfileName>
        <SideMenuProfileJob>{userJob}</SideMenuProfileJob>
      </SideMenuProfileRight>
    </SideMenuProfileContainer>
  );
};

export default SideMenuProfileInfo;
