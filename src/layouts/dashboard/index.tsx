import { useState, ReactNode } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// guards
import AuthGuard from '../../guards/AuthGuard';
// config
import {
  DASHBOARD_NAVBAR_WIDTH,
  DASHBOARD_HEADER_MOBILE,
  DASHBOARD_HEADER_DESKTOP,
  DASHBOARD_NAVBAR_COLLAPSE_WIDTH,
} from '../../config';
//
import DashboardHeader from './header';
import DashboardNavbar from './navbar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    minHeight: '100%',
  },
}));

type MainStyleProps = {
  collapseClick: boolean;
};

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})<MainStyleProps>(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: DASHBOARD_HEADER_MOBILE + 24,
  paddingBottom: DASHBOARD_HEADER_MOBILE + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: DASHBOARD_HEADER_DESKTOP + 24,
    paddingBottom: DASHBOARD_HEADER_DESKTOP + 24,
    width: `calc(100% - ${DASHBOARD_NAVBAR_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: DASHBOARD_NAVBAR_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const { collapseClick } = useCollapseDrawer();

  const [open, setOpen] = useState(false);

  return (
    <AuthGuard>
      <RootStyle>
        <DashboardHeader onOpenSidebar={() => setOpen(true)} />

        <DashboardNavbar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

        <MainStyle collapseClick={collapseClick}>{children}</MainStyle>
      </RootStyle>
    </AuthGuard>
  );
}
