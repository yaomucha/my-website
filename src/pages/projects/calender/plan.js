import * as React from 'react';
import CalenderContainer from "@/features/projects/calender/components/index"
import { DataGrid } from '@mui/x-data-grid';
import { Button, ButtonGroup, Divider, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from '@mui/material';


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const columns = [
    { field: 'taskName', headerName: 'Task Name', width: 300 },
    { field: 'dueDate', headerName: 'Due Date', width: 130 },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        valueGetter: (params) =>
            params.row.status === 0 ? "未完成" : "已完成"
    },
    {
        field: 'priority',
        headerName: 'Priority',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => {
            switch (params.row.priority) {
                case 1:
                    return "高"
                case 2:
                    return "中"
                case 3:
                    return "低"
                default:
                    return "未知"
            }
        }
    },
    {
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => <>
            <Button>edit</Button>
            <Button>remove</Button>
        </>,
    },
];


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function Plan() {

    const [planList, setPlanList] = React.useState([])


    React.useEffect(() => {
        fetch("/api/calender/getList")
            .then(res => res.json())
            .then(res => {
                setPlanList(res.data)
            })
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState(null);




    const aa = <div className='bg-white' style={{
        height: 'calc(100% - 100px)'
    }}>
        <Button className='mb-[20px]' onClick={handleOpen}>new task</Button>
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


        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Create Task
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input">Task Title</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" placeholder='Enter task title' />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                        // onChange={handleChange}
                        >
                            <MenuItem value={0}>未完成</MenuItem>
                            <MenuItem value={1}>已完成</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                        // onChange={handleChange}
                        >
                            <MenuItem value={1}>高</MenuItem>
                            <MenuItem value={2}>中</MenuItem>
                            <MenuItem value={3}>低</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Due Date" />
                        </LocalizationProvider>
                    </FormControl>
                    <ButtonGroup>
                        <Button>cancel</Button>
                        <Button>submit</Button>
                    </ButtonGroup>
                </Box>
            </Fade>
        </Modal>
    </div>



    return <CalenderContainer routeComponent={aa} />
}