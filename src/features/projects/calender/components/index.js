import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from "next/image"


import * as echarts from 'echarts';
import Dashboard_TodoList from "./Dashboard_TodoList"
import Dashboard_time from './Dashboard_time';









const drawerWidth = '300'



function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2 }}
                >
                    <Image
                        priority
                        src="/user_1.jpg"
                        className="userImage"
                        height={40}
                        width={40}
                        alt="123"
                    />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Calender
                </Typography>
            </Toolbar>
            <List>
                {['个人数据', '计划'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InsertChartIcon /> : <CalendarMonthIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
                contrastText: '#000000'
            },
        },
    });


    React.useEffect(() => {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '时长统计',
                left: 20,
                top: 20
            },
            xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                offset: 10,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }

            },
            yAxis: {
                type: 'value',
                max: 8,
                offset: 40
            },
            series: [
                {
                    data: [6, 2, 2, 3, 1, 4, 5],
                    type: 'bar',
                    color: '#ff6370',
                    showBackground: true,
                    backgroundStyle: {
                        color: '#f2f2f2',
                        borderRadius: 50
                    },
                    itemStyle: {
                        borderRadius: 50
                    },
                    barWidth: 25
                }
            ]
        };

        option && myChart.setOption(option);
    }, [])

    React.useEffect(() => {
        var chartDom = document.getElementById('main1');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            // legend: {
            //     data: ['上午', '下午', '晚上']
            // },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '课程', max: 8 },
                    { name: '刷题', max: 8 },
                    { name: '运动', max: 8 },
                    { name: '背书', max: 8 },
                    { name: '默写', max: 8 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [1, 2, 3, 4, 5, 6],
                            name: '上午'
                        },
                        {
                            value: [7, 6, 5, 4, 3, 2],
                            name: '下午'
                        },
                        {
                            value: [2, 5, 2, 4, 2, 1],
                            name: '晚上'
                        }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);
    }, [])







    return (
        <Box sx={{ display: 'flex', background: '#f5f5f5', height: '100vh' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
                                Calender
                            </Typography>
                            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
                                Nice Day！
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: `${drawerWidth}px` }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}px` },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}px` },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>




            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    欢迎来到个人时间管理后台
                </Typography>
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
                        <Dashboard_TodoList/>
                    </Paper>
                    <Paper sx={{
                        gridColumnStart: 4,
                        gridColumnEnd: 6,
                        gridRowStart: 3,
                        gridRowEnd: 5
                    }} elevation={0}>
                        <Dashboard_time/>
                    </Paper>
                </Box>
            </Box>
        </Box >
    );
}

export default ResponsiveDrawer;