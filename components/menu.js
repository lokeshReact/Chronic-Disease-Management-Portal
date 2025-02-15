import Link from "next/link"

export default function Menu(){
    const menu = [
        {name:"Home", path:"/"},
        {name:"Admin", path:"/admin"},
        {name:"Resources", path:"/"},
        {name:"Contact", path:"/"}
    ]

    return(
        <div className='main-menu'>
            {menu.map((route, i)=>(
                <Link key={i} href={route.path}>{route.name}</Link>
            ))}
        </div>
    )
}