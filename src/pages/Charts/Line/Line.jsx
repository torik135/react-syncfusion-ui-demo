import { Header, LineChart } from '../../../components';
import { useStateContext } from '../../../context/GlobalProvider';

const Line = () => {
  const { currentMode } = useStateContext();
  return (
    <div
      className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'
      style={{ color: currentMode === 'Dark' ? '#fff' : '#33373e' }}
    >
      <Header category='Chart' title='Line Chart' />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  );
};

export { Line };
