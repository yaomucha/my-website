import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import CalenderContainer from "@/features/projects/calender/components/index"
import Dashboard_TodoList from "@/features/projects/calender/components/Dashboard_TodoList"
import Dashboard_time from '@/features/projects/calender/components/Dashboard_time';

export default function Calender() {
    const aa = <>
        <Box
            sx={{
                display: 'grid',
                width: 'calc(100% - 80px)',
                height: 'calc(100% - 170px)',
                gridTemplateColumns: 'repeat(5, 20%)',
                gridTemplateRows: 'repeat(4, 25%)',
                gridGap: '20px 20px'
            }}
        >
            <Paper sx={{
                gridColumnStart: 1,
                gridColumnEnd: 4,
                gridRowStart: 1,
                gridRowEnd: 3
            }}
                id="main"
                elevation={0}
            >


            </Paper>
            <Paper sx={{
                gridColumnStart: 4,
                gridColumnEnd: 6,
                gridRowStart: 1,
                gridRowEnd: 3,
                position: "relative",
                background: '#f9f9f9'
            }} elevation={0}>
                <div id="main1" className='main1'></div>
                <div className='main-cont1'>
                    <ul>
                        <li>
                            <span>上午</span>
                            <span>33</span>
                        </li>
                        <li>
                            <span>下午</span>
                            <span>28</span>
                        </li>
                        <li>
                            <span>晚上</span>
                            <span>17</span>
                        </li>
                    </ul>
                </div>
            </Paper>
            <Paper sx={{
                gridColumnStart: 1,
                gridColumnEnd: 4,
                gridRowStart: 3,
                gridRowEnd: 5
            }} elevation={0}>
                <Dashboard_TodoList />
            </Paper>
            <Paper sx={{
                gridColumnStart: 4,
                gridColumnEnd: 6,
                gridRowStart: 3,
                gridRowEnd: 5
            }} elevation={0}>
                <Dashboard_time />
            </Paper>


        </Box>

    </>
    return <CalenderContainer routeComponent={aa} />
}