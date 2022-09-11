import { BsCurrencyDollar as DollarIcon } from 'react-icons/bs';
import { GoPrimitiveDot as DotIcon } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../../components';
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from '../../data/dummyData';

import { useStateContext } from '../../context/GlobalProvider';

const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 p-9 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-2xl'>Rp. 10.000.000</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              size='md'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={`${item.title}_${Math.random()}`}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap gap-10 justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex gap-2 items-center text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <DotIcon />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex gap-2 items-center text-green-600 hover:drop-shadow-xl'>
                <span>
                  <DotIcon />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>Rp. 1.900.000</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-bg-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>Rp. 900.000</span>
                </p>
                <p className='text-bg-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  color={currentColor}
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Ecommerce };
