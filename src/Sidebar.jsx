import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import './custom.scss';
import header_sidebar from './imagem/header_sidebar.jpeg'
import footer_sidebar from './imagem/footer_sidebar.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  return (
    <ProSidebar>
      <SidebarHeader>
        {
          <>
            <img src={header_sidebar} />
          </>
        }
      </SidebarHeader>
      <SidebarContent>
        {
          <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faThLarge} />}>Painel</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faCog} />}>Configurações</MenuItem>
          </Menu>
        }
      </SidebarContent>
      <SidebarFooter>
        {
          <>
            <img src={footer_sidebar} />
          </>
        }
      </SidebarFooter>
    </ProSidebar>
  );
}

export default Sidebar;