import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = (props) => {
  const { id, height, width, color, currentColor, type, data } = props;
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      type={type}
      xName='x'
      yName='y'
      tooltipSettings={{
        visible: true,
        format: '${x}: data${y}',
        tracklineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  );
};

export { SparkLine };
