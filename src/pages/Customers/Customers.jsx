import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
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
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='customer' />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Search', 'Delete']}
        pageSettings={{pageCount: 5}}
        selectionSettings={{persistSelection: true}}
        editSettings={{allowEditing: true, allowDeleting: true}}
        toolbar={['Delete']}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item) => (
            <ColumnDirective key={Math.random()} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export { Customers };
