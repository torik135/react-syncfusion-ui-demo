import './assets/css/App.css';

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings as SettingIcon } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked as StackedPages,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie as PiePages,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from './pages';
import { Navbar, Footer, Sidebar, ThemeSetting } from './components';
import { useStateContext } from './context/GlobalProvider';

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    setCurrentColor,
    currentMode,
    setCurrentMode,
  } = useStateContext();

  useEffect(() => {
    const currThemeColor = localStorage.getItem('colorMode');
    const currThemeMode = localStorage.getItem('themeMode');
    if (currThemeMode && currThemeColor) {
      setCurrentMode(currThemeMode);
      setCurrentColor(currThemeColor);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '999' }}>
            <TooltipComponent content='Settings' position='top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}
              >
                <SettingIcon />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
              ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSetting />}
              <Routes>
                {/* DASH */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* PAGES */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* APPS */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* CHARTS */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<PiePages />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<StackedPages />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
