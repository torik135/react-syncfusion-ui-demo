import { MdOutlineCancel as CancelIcon } from 'react-icons/md';
import { BsCheck as CheckIcon } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../../data/dummyData';
import { useStateContext } from '../../context/GlobalProvider';

const ThemeSetting = () => {
  const { setColor, setMode, currentColor, currentMode, setThemeSettings } =
    useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen darK:text-gray-200 bg-white dark:[#484b52] w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-2xl'>Settings</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <CancelIcon />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Settings</p>
          {/* LIGHT */}
          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='cursor-pointer'
              checked={currentMode === 'Light'}
              onChange={setMode}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          {/* DARK */}
          <div className='mt-4'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='cursor-pointer'
              checked={currentMode === 'Dark'}
              onChange={setMode}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item) => (
              <TooltipComponent
                key={Math.random()}
                content={item.name}
                position='TopCenter'
              >
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <CheckIcon
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ThemeSetting };
