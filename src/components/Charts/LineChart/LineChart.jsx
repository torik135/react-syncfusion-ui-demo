import {
  ChartComponent,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../../../data/dummyData';
import { useStateContext } from '../../../context/GlobalProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item) => (
          <SeriesDirective key={Math.random()} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export { LineChart };
