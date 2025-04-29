import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
  <Drawer variant="permanent">
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* Add more links as necessary */}
      </List>
    </Box>
  </Drawer>
);

export default Sidebar;
