import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor='#111' backgroundColor='#fff'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: 'inherit', fontSize: '24px' }}
          >
            Gain<span style={{color: '#b10f2e'}}>IT</span>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/instructors' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='table'>Instructors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/membership' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='user'>Membership</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/members' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='users'>
                Members
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='#'>
              <CDBSidebarMenuItem icon='exclamation-circle'>
                Log out
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
