import { 
  FaUser, 
  FaCog, 
  FaWpforms, 
  FaTachometerAlt, 
  FaEye,  FaEdit, 
  FaUserPlus,   FaUsers, 
  FaLock, 
  FaGlobe 
} from 'react-icons/fa';

const menuConfig = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    icon: <FaTachometerAlt size={16} />,
    roles: ['admin'], // दोनों को दिखेगा
    submenus: [
       { key: 'mainDashboard', label: 'Main Dashboard', icon: <FaEye size={14} /> }
    ]
  },
  {
    key: 'profile',
    title: 'Profile',
    icon: <FaUser size={16} />,
    roles: ['admin', 'user'],
    submenus: [
      { key: 'viewProfile', label: 'View Profile' ,icon: <FaEye size={14} /> },
      { key: 'GetProfile', label: 'Edit Profile',icon: <FaEdit size={14} /> }
    ]
  },
  {
    key: 'registrationForm',
    title: 'Registration Form',
    icon: <FaWpforms size={16} />,
    roles: ['admin'], // सिर्फ admin देख सकता है
    submenus: [
      { key: 'addUser', label: 'Add New User',icon: <FaUserPlus size={14} /> },
      { key: 'viewUsers', label: 'View Users',icon:<FaEye  size={15}/>}
    ]
  },
  {
    key: 'settings',
    title: 'Settings',
    icon: <FaCog size={16} />,
    roles: ['admin', 'user'],
    submenus: [
      { key: 'changePassword', label: 'Change Password' },
      { key: 'language', label: 'Language' }
    ]
  }
];

export default menuConfig;
