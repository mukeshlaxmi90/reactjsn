import React, { useState } from 'react';
import '../AllCss/UserSidebar.css';
import menuConfig from "../Components/menuConfig";
import {  FaUser, FaCog, FaSignOutAlt,  FaChevronDown, FaChevronUp,  FaWpforms} from 'react-icons/fa';


const UserSidebar = ({ collapsed, onMenuSelect}) => {
 
  const [hovered, setHovered] = useState(false);
  // const [openSubmenus, setOpenSubmenus] = useState({
  //   profile: false,
  //   settings: false,
  //   "Registration Form": false,
  // });
  const [openSubmenus, setOpenSubmenus] = useState({});

   const userRole = localStorage.getItem("role") || "user"; // yaha read hoga
  const isExpanded = !collapsed || hovered;

  const toggleSubmenu = (key) => {
  const menu = menuConfig.find(item => item.key === key);
  console.log("Toggle:", key, menu, "UserRole:", userRole);
  if (!menu || !menu.roles.includes(userRole)) {
    console.log("Access denied or menu not found");
    return;
  }


    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
   const filteredMenu = menuConfig.filter(item => item.roles.includes(userRole));
   return (
    <aside
      className="sidebar"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: isExpanded ? 'max-content' : '60px',
        minWidth: isExpanded ? '220px' : '60px',
        maxWidth: '400px',
      }}
    >
      <ul className="sidebar-list">
        {filteredMenu.map((menu) => (
          <React.Fragment key={menu.key}>
            <li className="menu-item" onClick={() => toggleSubmenu(menu.key)}>
              {menu.icon}
              {isExpanded && <span className="label">{menu.title}</span>}
              {isExpanded &&
                (openSubmenus[menu.key]
                  ? <FaChevronUp size={12} />
                  : <FaChevronDown size={12} />)}
            </li>
            {isExpanded && openSubmenus[menu.key] && (
              <ul className="submenu-list">
                {menu.submenus.map((sub) => (
                  <li
                    key={sub.key}
                    className="submenu-item"
                    onClick={() => onMenuSelect(sub.key)}
                  >
                     {sub.icon && <span style={{ marginRight: '8px' }}>{sub.icon}</span>}
                    {sub.label}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}

        {/* Logout */}
        <li className="menu-item">
          <FaSignOutAlt size={16} />
          {isExpanded && <span className="label">Logout</span>}
        </li>
      </ul>
    </aside>
  );
  // return (
  //   <aside
  //     className="sidebar"
  //     onMouseEnter={() => setHovered(true)}
  //     onMouseLeave={() => setHovered(false)}
  //     style={{
  //       width: isExpanded ? 'max-content' : '60px',
  //       minWidth: isExpanded ? '220px' : '60px',
  //       maxWidth: '400px',
  //     }}
  //   >
  //     <ul className="sidebar-list">
  //       {/* Profile */}
  //       <li className="menu-item" onClick={() => toggleSubmenu('profile')}>
  //         <FaUser size={16} />
  //         {isExpanded && <span className="label">Profile</span>}
  //         {isExpanded &&
  //           (openSubmenus.profile ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />)}
  //       </li>
  //       {isExpanded && openSubmenus.profile && (
  //         <ul className="submenu-list">
  //           <li className="submenu-item" onClick={() => onMenuSelect('viewProfile')}>👤 View Profile</li>
  //           <li className="submenu-item" onClick={()=>onMenuSelect('datagetprofile')}>✏️ Edit Profile</li>
  //         </ul>
  //       )}

  //       {/* Registration Form */}
  //       <li className="menu-item" onClick={() => toggleSubmenu('Registration Form')}>
  //         <FaWpforms size={16} />
  //         {isExpanded && <span className="label">Registration Form</span>}
  //         {isExpanded &&
  //           (openSubmenus['Registration Form']
  //             ? <FaChevronUp size={12} />
  //             : <FaChevronDown size={12} />)}
  //       </li>
  //       {isExpanded && openSubmenus['Registration Form'] && (
  //         <ul className="submenu-list">
  //           <li className="submenu-item">📝 Add New User</li>
  //           <li className="submenu-item">📄 View Users</li>
  //         </ul>
  //       )}

  //       {/* Settings */}
  //       <li className="menu-item" onClick={() => toggleSubmenu('settings')}>
  //         <FaCog size={16} />
  //         {isExpanded && <span className="label">Settings </span>}
  //         {isExpanded &&
  //           (openSubmenus.settings ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />)}
  //       </li>
  //       {isExpanded && openSubmenus.settings && (
  //         <ul className="submenu-list">
  //           <li className="submenu-item">🔒 Change Password</li>
  //           <li className="submenu-item">🌐 Language</li>
  //         </ul>
  //       )}

  //       {/* Logout */}
  //       <li className="menu-item">
  //         <FaSignOutAlt size={16} />
  //         {isExpanded && <span className="label">Logout</span>}
  //       </li>
  //     </ul>
  //   </aside>
  // );
};

export default UserSidebar;
