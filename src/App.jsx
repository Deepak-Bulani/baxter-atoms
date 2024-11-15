import { useState } from 'react';
import Input from './components/Form/Input';
import Option from './components/Form/Option';
import Table from './components/Table/Table';
import Menu from './components/Menu/Menu';
import { testCols } from './constants';
import './App.css';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true },
];

const columns = [
  {
    header: 'Patient Information',
    accessor: 'patientInfo',
    className: 'w-1/3',
    render: (value, row) => (
      <div>
        <div>{row.name}</div>
        <div>{row.dob}</div>
        <div>Clinic Patient ID: {row.clinicId}</div>
        <div>Baxter Patient ID: {row.baxterId}</div>
      </div>
    ),
  },
  {
    header: 'Attending Physician',
    accessor: 'physician',
    className: 'w-1/4',
  },
  {
    header: 'Status',
    accessor: 'status',
    className: 'w-1/6',
  },
  {
    header: 'Action',
    accessor: 'action',
    className: 'w-1/6',
    render: (value, row) => (
      <button className='text-blue-600 hover:underline'>Edit</button>
    ),
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [activeItem, setActiveItem] = useState('search');

  const items = [
    {
      label: 'Patients',
      isHeader: true, // This will render as header text
    },
    {
      label: 'Patient Search',
      isActive: activeItem === 'search',
      onClick: () => setActiveItem('search'),
    },
    {
      label: 'Add Patient',
      isActive: activeItem === 'add',
      onClick: () => setActiveItem('add'),
    },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <div className='flex mt-3 justify-between'>
        <Input label={'lhee'} labelPosition='top' size='sm' />
        <Input label={'lhee'} labelPosition='top' size='sm' />
      </div>
      <div className='flex mt-3 justify-between'>
        <Option
          label='Select an option'
          name='options'
          placeholder='Choose an option'
          items={options}
          required
          size='sm'
        />
        <Option
          label='Select an option'
          name='options'
          placeholder='Choose an option'
          items={options}
          required
          size='sm'
        />
      </div>
      <Table columns={columns} data={testCols} pageSize={10} />
      <Menu items={items} />
    </>
  );
}

export default App;
