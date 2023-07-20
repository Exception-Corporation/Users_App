import React, { memo } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { NavLinkProps } from 'react-router-dom';
import { NavbarList } from '@/shared/utils/global.types';

function NavListDrawer({
  onClick,
  component,
  elements
}: {
  onClick: () => void;
  elements: NavbarList[];
  component: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}) {
  return (
    <Box sx={{ width: 250 /*bgcolor: "lightsalmon" */ }} onClick={onClick}>
      <nav aria-label="main mailbox folders">
        <List>
          {elements.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton to={item.path} component={component}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </Box>
  );
}

export default memo(NavListDrawer);
