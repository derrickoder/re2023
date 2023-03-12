import React from 'react';
import { FunctionComponent, useState } from 'react';
import GenericDrawer from '../components/GenericDrawer';

const Pricing = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const onToggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const onRefreshData = (isUpdated:boolean) => {
        alert('refresh the data');
    }

    return (
        <React.Fragment>
            <button onClick={onToggleDrawer}>Open</button>
            {/* <GenericDrawer 
                open={openDrawer}
                componentHeading="This is the Pricing Form"
                component="EventForm"
                toggleDrawer={onToggleDrawer} 
                refreshData={onRefreshData}/> */}
        </React.Fragment>
    );
};

export default Pricing;