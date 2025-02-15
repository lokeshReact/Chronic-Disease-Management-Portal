import Link from 'next/link';
import React from 'react';

export default function SideMenu(){

    const menu = [
        {name:"Dashboard", path:"/admin"},
        {name:"My Profile", path:"/admin/profile"},
        {name:"Helth Matrics", path:"/admin/matrics"},
        {name:"Messages", path:"/admin/messages"},
        {name:"logOut", path:"/logOut"}
    ]

    return(
        <div className='side-menu'>
            <h3>Bayer Health</h3>
            {menu.map((route, i)=>(
                <Link key={i} href={route.path}>{route.name}</Link>
            ))}
        </div>
    )
}
