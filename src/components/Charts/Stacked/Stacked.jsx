import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../../data/dummyData';

const Stacked = (props) => {
  const { width, height } = props;
  return (
    <ChartComponent
      height={height}
      width={width}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item) => (
          <SeriesDirective key={Math.random()} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export { Stacked };
