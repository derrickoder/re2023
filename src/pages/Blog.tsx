/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as React from 'react';
import { useState } from 'react'
import Drawer from '@mui/material/Drawer';

const Blog = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const onOpenDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div>
            
            Inside blog

            <button onClick={onOpenDrawer}>Open Drawer</button>

            <Drawer 
                open={openDrawer} 
                anchor="right"
                >
                <div css={css`width:400px;`}>
                    <button onClick={onOpenDrawer}>Close Drawer</button>
                    test
                </div>
            </Drawer>

        </div>    
    );
};

export default Blog;