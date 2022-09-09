import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../../data/dummyData';
import { Header } from '../../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 b-white rounded-3xl'>
      <Header category='Page' title='employees' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        pageSettings={{ pageCount: 5 }}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item) => (
            <ColumnDirective key={Math.random()} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]} />
      </GridComponent>
    </div>
  );
};

export { Employees };
