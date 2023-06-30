import * as React from 'react';
import CalenderContainer from "@/features/projects/calender/components/index"
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button, ButtonGroup, Collapse, Divider, FormControl, FormHelperText, IconButton, Input, InputLabel, MenuItem, Select, Slide, Snackbar, Stack } from '@mui/material';


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const columns = [
    { field: 'taskName', headerName: 'Task Name', width: 300 },
    { field: 'dueDate', headerName: 'Due Date', width: 130 },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: (params) =>
            params.row.status === 0 ? 
            <Button size="small" variant="contained" className='bg-[#fff8e6] text-[#ffc10a]'>PENDING</Button> : 
            <Button size="small" variant="contained" className='bg-[#e5f8f5] text-[#00c2c2]'>COMPLETED</Button>
    },
    {
        field: 'priority',
        headerName: 'Priority',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            switch (params.row.priority) {
                case 1:
                    return <Button size="small" variant="contained" className='bg-[#f06548]'>high</Button>
                case 2:
                    return <Button size="small" variant="contained" className='bg-[#ffbc0a]'>medium</Button>
                case 3:
                    return <Button size="small" variant="contained" className='bg-[#00bd9d]'>low</Button>
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
            <Stack spacing={2} direction="row">
                <IconButton aria-label="edit">
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
            </Stack>
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

    const getPlanList = () => {
        fetch("/api/calender/getList")
            .then(res => res.json())
            .then(res => {
                setPlanList(res.data)
            })
    }
    React.useEffect(() => {
        getPlanList()
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const form = React.useRef({})




    const aa = <div className='bg-white' style={{
        height: 'calc(100% - 100px)'
    }}>
        <Button className='mb-[20px]' onClick={handleOpen}>new task</Button>
        <div className='' style={{
            height: 'calc(100% - 57px)'
        }}>
            <DataGrid
                rows={planList}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                checkboxSelection
            />
        </div>



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
                        <Input id="my-input"
                            aria-describedby="my-helper-text"
                            placeholder='Enter task title'
                            onChange={(e) => {
                                form.value = { ...form.value, ...{ taskName: e.target.value } }
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            onChange={(e) => {
                                form.value = { ...form.value, ...{ status: e.target.value } }
                            }}
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
                            onChange={(e) => {
                                form.value = { ...form.value, ...{ priority: e.target.value } }
                            }}
                        >
                            <MenuItem value={1}>高</MenuItem>
                            <MenuItem value={2}>中</MenuItem>
                            <MenuItem value={3}>低</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Due Date"
                                onChange={(newValue) => {
                                    form.value = { ...form.value, ...{ dueDate: dayjs(newValue).format('DD/MM/YYYY') } }
                                }}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <ButtonGroup>
                        <Button onClick={() => { handleClose() }}>cancel</Button>
                        <Button onClick={(e) => {
                            fetch("/api/calender/addPlan",
                                {
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    method: "POST",
                                    body: JSON.stringify({ ...form.value, ...{ id: planList[planList.length - 1].id + 1 } })
                                })
                                .then(res => {
                                    handleClose()
                                    if (res.status !== 500) {
                                        <Snackbar
                                            open={true}
                                            // onClose={handleClose}
                                            TransitionComponent={() => {
                                                return (props) => {
                                                    return <Slide {...props} direction="left" />;
                                                }
                                            }}
                                            message="I love snacks"
                                        // key={transition ? transition.name : ''}
                                        />
                                        getPlanList()
                                    } else {
                                        Alert("添加失败")
                                    }
                                })
                        }}>submit</Button>
                    </ButtonGroup>
                </Box>
            </Fade>
        </Modal>
    </div>



    return <CalenderContainer routeComponent={aa} />
}