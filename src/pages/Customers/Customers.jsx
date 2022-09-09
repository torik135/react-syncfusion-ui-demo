import {
  GridComponent,
  ColumnsDirective,
  ColumnDIrective,
  Page,
  Selection,
  Search,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../../data/dummyData';
import { Header } from '../../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 b-white rounded-3xl'>
      <Header category='Page' title='customer' />
      <GridComponent
        dataSource={customersData}
        allowPaging
        toolbar={['Search', 'Delete']}
        editSettings={{allowEditing: true, allowDeleting: true}}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item) => (
            <ColumnDirective key={Math.random()} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export { Customers };
