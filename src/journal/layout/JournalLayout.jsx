import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components/';

const drawerWidth = 280;

function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <NavBar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxHeight: '100%', }}>
        {/* Toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default JournalLayout;
