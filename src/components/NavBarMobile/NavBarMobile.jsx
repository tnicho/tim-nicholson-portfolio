import React, {useState} from "react";
import {Box, Toolbar, AppBar, Typography, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, Drawer, ListItemText, ListSubheader, ListItemAvatar} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import BoyIcon from '@mui/icons-material/Boy';
import MailIcon from '@mui/icons-material/Mail';


export default function NavBarMobile() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick = {() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Navigation Bar
            </Typography>
          </Toolbar>
        </AppBar>
      <Drawer 
        anchor = 'left'
        open = {isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
      <List>
        <ListSubheader>Navigation</ListSubheader>
          <ListItem
          button
          component ='a'
          href="#landingPage"
          onClick = {() => setIsDrawerOpen(false)}
          >
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            Landing Page
          </ListItem>
        <ListItem
          button
          component ='a'
          href="#projectPage"
          onClick = {() => setIsDrawerOpen(false)}
          >
          <ListItemIcon>
            <WorkIcon/>
          </ListItemIcon>
          Projects
        </ListItem>
        <ListItem
          button
          component ='a'
          href="#aboutMePage"
          onClick = {() => setIsDrawerOpen(false)}>
          <ListItemIcon>
            <BoyIcon/>
          </ListItemIcon>
          About Me
        </ListItem>
        <ListItem
          button
          component ='a'
          href="#linksPage"
          onClick = {() => setIsDrawerOpen(false)}
        >
          <ListItemIcon>
            <MailIcon/>
          </ListItemIcon>
          Contact
        </ListItem>
    </List>
    </Drawer>
      </Box>
    );
  }