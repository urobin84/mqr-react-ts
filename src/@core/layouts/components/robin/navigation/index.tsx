import React, {ReactNode, useRef, useState} from 'react';

// ** Type Import
import {Settings} from "../../../../context/settingContext";
import {RobinNavItemsType} from "../../../types";

// ** MUI Import
import {Box, List, styled, useTheme} from "@mui/material";
import {BoxProps} from "@mui/material/Box";

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Component Imports
import Drawer from "./Drawer";
import RobinNavHeader from "./RobinNavHeader";
import VerticalNavItems from "./RobinNavItems";

// ** Util Import
import {hexToRGBA} from "../../../../utils/hex-to-rgba";

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  children: ReactNode
  navVisible: boolean
  toggleNavVisibility: () => void
  setNavVisible: (value: boolean) => void
  robinNavItems?: RobinNavItemsType
  saveSettings: (values: Settings) => void
  robinNavMenuContent?: (props?: any) => ReactNode
  afterRobinNavMenuContent?: (props?: any) => ReactNode
  beforeRobinNavMenuContent?: (props?: any) => ReactNode
}

const StyledBoxForShadow = styled(Box)<BoxProps>({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block'
  }
})

const Navigation = (props: Props) => {
  // ** Props
  const { hidden, afterRobinNavMenuContent, beforeRobinNavMenuContent, robinNavMenuContent: userRobinNavMenuContent} = props

  // ** States
  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])

  // ** Ref
  const shadowRef = useRef(null)

  // ** Hooks
  const theme = useTheme()

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  // ** Scroll Menu
  const scrollMenu = (container: any) => {
    container = hidden ? container.target : container
    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('d-block')) {
        // @ts-ignore
        shadowRef.current.classList.add('d-block')
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('d-block')
    }
  }

  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Drawer {...props} >
      <RobinNavHeader {...props} />
      <StyledBoxForShadow
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${theme.palette.background.default} 40%,${hexToRGBA(
            theme.palette.background.default,
            0.1
          )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`
        }}
      />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* @ts-ignore */}
        <ScrollWrapper
          containerRef={(ref: any) => handleInfiniteScroll(ref)}
          {...(hidden
            ? {
              onScroll: (container: any) => scrollMenu(container),
              sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
            }
            : {
              options: { wheelPropagation: false },
              onScrollY: (container: any) => scrollMenu(container)
            })}
        >
          {beforeRobinNavMenuContent ? beforeRobinNavMenuContent(props) : null}
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {userRobinNavMenuContent ? (
              userRobinNavMenuContent(props)
            ) : (
              <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 4.5 }}>
                <VerticalNavItems
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
          </Box>
        </ScrollWrapper>
      </Box>
      {afterRobinNavMenuContent ? afterRobinNavMenuContent(props) : null}
    </Drawer>
  );
};

export default Navigation;
