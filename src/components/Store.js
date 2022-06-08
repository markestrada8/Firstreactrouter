import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { positions } from '@mui/system';
import '../style/store.scss';
import StoreContainer from './store/store-container';
import weapons from './inventory/weapons';
import clothing from './inventory/clothing';
import food from './inventory/food';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', postion: "fixed", mt: "60px" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} orintation="vertical">
                    <Tab label="Weapons" {...a11yProps(0)} />
                    <Tab label="Clothing" {...a11yProps(1)} />
                    <Tab label="Food" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <StoreContainer items={weapons} />

            </TabPanel>
            <TabPanel value={value} index={1}>
                <StoreContainer items={clothing} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <StoreContainer items={food} />
            </TabPanel>
        </Box>

    );
}
