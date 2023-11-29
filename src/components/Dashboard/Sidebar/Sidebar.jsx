import { useState } from 'react'
// Components

import MenuItem from '../Sidebar/MenuItem'
import ToggleBtn from '../../ToggleBtn'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import useRole from '../../../Hooks/userRole'
import AdminMenu from './AdminMenu'
import GuideMenu from './GuideMenu'
import TouristMenu from './TouristMenu'
import useAuth from '../../../Hooks/useAuth'


const Sidebar = () => {
  const {logOut } = useAuth()
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
  const [role] = useRole()
  console.log('Rol', role);

  
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
     
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              
            </div>
          </div>

          
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
            <ToggleBtn toggleHandler={toggleHandler} />
            <nav>
              {/* role menu items */}
              {role === 'admin' && <AdminMenu></AdminMenu>}
              {role === 'guide' && <GuideMenu></GuideMenu>}
              {role === 'tourist' && <TouristMenu></TouristMenu>}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          />
          <button onClick={logOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <GrLogout className='w-5 h-5' />

            <span  className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar