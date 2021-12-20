// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Container, CardHeader, CardContent } from '@mui/material';
// routes
import { PATH_PAGE } from '../../../src/routes/paths';
// layouts
import Layout from '../../../src/layouts';
// components
import Page from '../../../src/components/Page';
import HeaderBreadcrumbs from '../../../src/components/HeaderBreadcrumbs';
// sections
import { FormikForm, ReactHookForm } from '../../../src/sections/overview/extra/form';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

DemoFormValidation.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function DemoFormValidation() {
  return (
    <Page title="Form Validation">
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
          }}
        >
          <Container>
            <HeaderBreadcrumbs
              heading="Form Validation"
              links={[
                { name: 'Components', href: PATH_PAGE.components },
                { name: 'Form Validation' },
              ]}
              moreLink={[
                'https://formik.org/',
                'https://react-hook-form.com/',
                'https://github.com/jquense/yup',
              ]}
            />
          </Container>
        </Box>

        <Container sx={{ mt: 10 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ position: 'static' }}>
                <CardHeader title="Formik Form" />
                <CardContent>
                  <FormikForm />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ position: 'static' }}>
                <CardHeader title="React Hook Form" />
                <CardContent>
                  <ReactHookForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
