// ** Types Import
import { Settings } from '../../../../context/settingContext';
import {
  NavLink,
  NavSectionTitle,
  RobinNavItemsType,
} from 'src/@core/layouts/types';

// ** Custom Menu Components
import RobinNavLink from './RobinNavLink';
import RobinNavSectionTitle from './RobinNavSectionTitle';

interface Props {
  settings: Settings;
  navVisible?: boolean;
  groupActive: string[];
  currentActiveGroup: string[];
  robinNavItems?: RobinNavItemsType;
  saveSettings: (values: Settings) => void;
  setGroupActive: (value: string[]) => void;
  setCurrentActiveGroup: (item: string[]) => void;
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return RobinNavSectionTitle;

  return RobinNavLink;
};

const RobinNavItems = (props: Props) => {
  // ** Props
  const { robinNavItems } = props;

  const RenderMenuItems = robinNavItems?.map(
    (item: NavLink | NavSectionTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item);

      return <TagName {...props} key={index} item={item} />;
    }
  );

  return <>{RenderMenuItems}</>;
};

export default RobinNavItems;
