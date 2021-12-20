import { paramCase } from 'change-case';
import { useRef, useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Menu, MenuItem, IconButton } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  onDelete: VoidFunction;
  productName: string;
};

export default function ProductMoreMenu({ onDelete, productName }: Props) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            px: 1,
            width: 200,
            color: 'text.secondary',
          },
        }}
      >
        <MenuItem onClick={onDelete} sx={{ borderRadius: 1, typography: 'body2' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2, width: 24, height: 24 }} />
          Delete
        </MenuItem>

        <NextLink href={`${PATH_DASHBOARD.eCommerce.root}/product/${paramCase(productName)}/edit`}>
          <MenuItem sx={{ borderRadius: 1, typography: 'body2' }}>
            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2, width: 24, height: 24 }} />
            Edit
          </MenuItem>
        </NextLink>
      </Menu>
    </>
  );
}
