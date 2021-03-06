// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// layouts
import Layout from '../../src/layouts';
// components
import Page from '../../src/components/Page';
// sections
import { ComponentHero, ComponentExtra } from '../../src/sections/overview';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

Overview.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Overview() {
  return (
    <Page title="Components Overview">
      <RootStyle>
        <ComponentHero />

        <Container sx={{ mt: 10 }}>
          <ComponentExtra />
        </Container>
      </RootStyle>
    </Page>
  );
}
