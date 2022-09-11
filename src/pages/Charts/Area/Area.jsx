import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Inject,
  DateTime,
  Legend,
} from '@syncfusion/ej2-react-charts';

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxix,
} from '../../../data/dummyData';
import { Header } from '../../../components';
import { useStateContext } from '../../../context/GlobalProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'
      style={{ color: currentMode === 'Dark' ? '#fff' : '#33373e' }}
    >
      <Header category='Chart' title='Area Chart' />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxix}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item) => (
            <SeriesDirective key={Math.random()} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export { Area };
