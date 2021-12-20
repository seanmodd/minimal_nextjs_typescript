// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { Typography, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
// @types
import { MailLabel } from '../../../@types/mail';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const LABEL_ICONS = {
  all: 'eva:email-fill',
  inbox: 'eva:inbox-fill',
  trash: 'eva:trash-2-outline',
  drafts: 'eva:file-fill',
  spam: 'ic:round-report',
  sent: 'ic:round-send',
  starred: 'eva:star-fill',
  important: 'ic:round-label-important',
  id_social: 'eva:share-fill',
  id_promotions: 'ic:round-label',
  id_forums: 'ic:round-forum',
};

const linkTo = (label: MailLabel) => {
  const baseUrl = PATH_DASHBOARD.mail.root;

  if (label.type === 'system') {
    return `${baseUrl}/${label.id}`;
  }
  if (label.type === 'custom') {
    return `${baseUrl}/label/${label.name}`;
  }
  return baseUrl;
};

// ----------------------------------------------------------------------

type Props = {
  label: MailLabel;
};

export default function MailSidebarItem({ label, ...other }: Props) {
  const { asPath } = useRouter();

  const isUnread = label.unreadCount > 0;

  const isActive = asPath === linkTo(label);

  return (
    <NextLink href={linkTo(label)}>
      <ListItemButton
        sx={{
          px: 3,
          height: 48,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          ...(isActive && {
            color: 'text.primary',
            fontWeight: 'fontWeightMedium',
            bgcolor: 'action.selected',
          }),
        }}
        {...other}
      >
        <ListItemIcon>
          <Iconify
            icon={LABEL_ICONS[label.id]}
            style={{ color: label.color }}
            width={24}
            height={24}
          />
        </ListItemIcon>

        <ListItemText disableTypography primary={label.name} />

        {isUnread && <Typography variant="caption">{label.unreadCount}</Typography>}
      </ListItemButton>
    </NextLink>
  );
}
