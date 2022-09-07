import { Link, NavLink } from 'react-router-dom';
import { SiShopware as ShopIcon } from 'react-icons/si';
import { MdOutlineCancel as CancelIcon } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../../data/dummyData';
import { useStateContext } from '../../context/GlobalProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLinks =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';

  const normalLinks =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
              to='/'
              onClick={() => setActiveMenu(false)}
            >
              <ShopIcon className='text-3xl' /> <span>Shop</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
                type='button'
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
              >
                <CancelIcon />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((items) => (
              <div key={Math.random()}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {items.title}
                </p>
                {items.links.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLinks : normalLinks
                    }
                    to={`/${link.name}`}
                    key={`${Math.random()}_${link.name}`}
                    onClick={() => {}}
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { Sidebar };
