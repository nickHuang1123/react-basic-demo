import { Link, Outlet } from "react-router-dom"

import { CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemText, Container } from '@mui/material';

import { Provider } from 'jotai'


function Default() {

  const routes = [
    {
      path: "/",
      name: "首頁"
    },
    {
      path: "/page-b",
      name: "B 頁面"
    },
    {
      path: "/page-c",
      name: "C 頁面"
    },
    {
      path: "/page-d",
      name: "Jotai"
    }
  ]

  const drawerWidth = 240

  return (
    <>
      <Provider>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" style={{ zIndex: 1201 }}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Layout
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            style={{ width: drawerWidth, flexShrink: 0 }}
            PaperProps={{ style: { width: drawerWidth } }}
          >
            <Toolbar />
            <div style={{ overflow: 'auto' }}>
              <List>
                {routes.map((route) => (
                  <ListItemButton key={route.path} component={Link} to={route.path}>
                    <ListItemText primary={route.name} />
                  </ListItemButton>
                ))}
              </List>
            </div>
          </Drawer>
          <main style={{padding: "10px"}}>
            <Toolbar />
            <Container>
              <Outlet />
            </Container>
          </main>
        </div>
      </Provider>
    </>
  )
}

export default Default