import {
  MenuTitleText,
  MenuTitleContainer,
  MenuTitleVersion,
} from './sideMenuTitle.styled';

const SideMenuTitle = ({ title, version, img }) => {
  return (
    <MenuTitleContainer>
      <img src={img} alt="logo" />
      <MenuTitleText>{title}</MenuTitleText>
      <MenuTitleVersion>{version}</MenuTitleVersion>
    </MenuTitleContainer>
  );
};

export default SideMenuTitle;
