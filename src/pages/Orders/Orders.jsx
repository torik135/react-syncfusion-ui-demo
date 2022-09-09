import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';

import {
  ordersData,
  contextMenuItems,
  ordersGrids,
} from '../../data/dummyData';
import { Header } from '../../components';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 b-white rounded-3xl'>
      <Header category='Page' title='orders' />
      <GridComponent>
        <ColumnsDirective id='gridcomp' dataSource={ordersData} allowPaging allowSorting>
          {ordersGrids.map((item) => (
            <ColumnDirective key={Math.random()} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export { Orders };
