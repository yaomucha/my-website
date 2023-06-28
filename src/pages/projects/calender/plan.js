import * as React from 'react';
import CalenderContainer from "@/features/projects/calender/components/index"
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


const columns = [
    { field: 'taskName', headerName: 'Task Name', width: 300 },
    { field: 'dueDate', headerName: 'Due Date', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'priority',
      headerName: 'Priority',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.dueDate || ''} ${params.row.status || ''}`,
    },
    {
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => <Button>edit</Button>,
      },
  ];
  
  

export default function Plan(){

    const [planList,setPlanList] = React.useState([])


    React.useEffect(()=>{
        fetch("/api/calender/getList")
        .then(res => res.json())
        .then(res => {
            setPlanList(res.data)
        })
    },[])



    const aa = <div className='bg-white' style={{
        height: 'calc(100% - 100px)'
    }}>
       <DataGrid
        rows={planList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
    
    
    return <CalenderContainer routeComponent={aa}/>
}