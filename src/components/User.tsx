/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { IUser } from '../interface/IEvent'

function User(props: IUser){
    return (
        <div css={css`
            font-family:tahoma;
            font-size:12px;
            color:#888;
            padding:3px;
            margin-top:2px;
            `}
            >
            
            {props.email}
        </div>
    );
}

export default User;