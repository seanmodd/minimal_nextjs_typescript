// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../src/routes/paths';
// hooks
import useSettings from '../../../../src/hooks/useSettings';
// layouts
import Layout from '../../../../src/layouts';
// components
import Page from '../../../../src/components/Page';
import HeaderBreadcrumbs from '../../../../src/components/HeaderBreadcrumbs';
// sections
import ProductNewForm from '../../../../src/sections/@dashboard/e-commerce/ProductNewForm';

// ----------------------------------------------------------------------

EcommerceProductCreate.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Ecommerce: Create a new product">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new product"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root,
            },
            { name: 'New product' },
          ]}
        />
        <ProductNewForm />
      </Container>
    </Page>
  );
}
