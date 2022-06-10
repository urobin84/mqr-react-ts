// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import RobinLayout from "../@core/layouts/RobinLayout";

// ** Navigation Imports
import RobinNavItems from 'src/navigation/robin'

// ** Component Import
// import UpgradeToProButton from './components/UpgradeToProButton'
import RobinAppBarContent from './components/robin/AppBarContent'

// ** Hook Import
import {useSettings} from "../@core/hooks/useSettings";

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const UpgradeToProImg = () => {
    return (
      <Box sx={{ mx: 'auto' }}>
        {/*<a*/}
        {/*  target='_blank'*/}
        {/*  rel='noreferrer'*/}
        {/*  href='https://themeselection.com/products/materio-mui-react-nextjs-admin-template/'*/}
        {/*>*/}
        {/*  <img width={230} alt='upgrade to premium' src={`/images/misc/upgrade-banner-${settings.mode}.png`} />*/}
        {/*</a>*/}
      </Box>
    )
  }

  return (
    <RobinLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      robinNavItems={RobinNavItems()} // Navigation Items
      afterRobinNavMenuContent={UpgradeToProImg}
      robinAppBarContent={(
        props // AppBar Content
      ) => (
        <RobinAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
      {/*<UpgradeToProButton />*/}
    </RobinLayout>
  )
}

export default UserLayout
