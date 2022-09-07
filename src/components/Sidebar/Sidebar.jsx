import { Link, NavLink } from 'react-router-dom';
import { SiShopware as ShopIcon } from 'react-icons/si';
import { MdOutlineCancel as CancelIcon } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../../data/dummyData';

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              onClick={() => {}}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <ShopIcon className='text-3xl' /> <span>Shop</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                onClick={() => {}}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <CancelIcon />
              </button>
            </TooltipComponent>
          </div>
        </>
      )}
    </div>
  );
};

export { Sidebar };
