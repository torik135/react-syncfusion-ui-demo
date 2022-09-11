import { useEffect } from 'react';
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';
import { FiShoppingCart as CartIcon } from 'react-icons/fi';
import { BsChatLeft as ChatIcon } from 'react-icons/bs';
import { RiNotification3Line as NotifIcon } from 'react-icons/ri';
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../../assets/img/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '../';
import { useStateContext } from '../../context/GlobalProvider';

const NavButton = (props) => {
  const { title, onClickFunc, icon, color, dotColor } = props;
  return (
    <TooltipComponent content={title} position='bottomCenter'>
      <button
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
        type='button'
        onClick={() => onClickFunc()}
        style={{ color }}
      >
        <span
          className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
          style={{ background: dotColor }}
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        onClickFunc={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<MenuIcon />}
      />

      <div className='flex'>
        <NavButton
          title='Cart'
          onClickFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<CartIcon />}
        />
        <NavButton
          title='Chat'
          onClickFunc={() => handleClick('chat')}
          color={currentColor}
          dotColor='red'
          icon={<ChatIcon />}
        />
        <NavButton
          title='Notification'
          onClickFunc={() => handleClick('notification')}
          color={currentColor}
          dotColor='red'
          icon={<NotifIcon />}
        />

        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img
              className='rounded-full h-8 w-8'
              src={avatar}
              alt='user-profile'
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Name</span>
            </p>
            <ArrowDownIcon className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export { Navbar };
