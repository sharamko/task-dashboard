import { NavItem, NavTitle } from './navigation.styled';
import { ReactComponent as DashboardImg } from '../../assets/sideMenu/dashboard-img.svg';
import { ReactComponent as ProductImg } from '../../assets/sideMenu/product-img.svg';
import { ReactComponent as CustomersImg } from '../../assets/sideMenu/customers-img.svg';
import { ReactComponent as IncomeImg } from '../../assets/sideMenu/income-img.svg';
import { ReactComponent as PromoteImg } from '../../assets/sideMenu/promote-img.svg';
import { ReactComponent as HelpImg } from '../../assets/sideMenu/help-img.svg';
import { ReactComponent as ChevronImg } from '../../assets/sideMenu/chevron-right.svg';

const Navigation = () => {
  return (
    <nav>
      <NavItem>
        <DashboardImg />
        <NavTitle>Dashboard</NavTitle>
      </NavItem>
      <NavItem>
        <ProductImg />
        <NavTitle>Product</NavTitle>
        <ChevronImg />
      </NavItem>
      <NavItem active={true}>
        <CustomersImg />
        <NavTitle>Customers</NavTitle>
        <ChevronImg />
      </NavItem>
      <NavItem>
        <IncomeImg />
        <NavTitle>Income</NavTitle>
        <ChevronImg />
      </NavItem>
      <NavItem>
        <PromoteImg />
        <NavTitle>Promote</NavTitle>
        <ChevronImg />
      </NavItem>
      <NavItem>
        <HelpImg />
        <NavTitle>Help</NavTitle>
        <ChevronImg />
      </NavItem>
    </nav>
  );
};

export default Navigation;
