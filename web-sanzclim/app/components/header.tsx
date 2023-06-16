'use client'
import style from './header.module.css'
import Link from "next/link"
const links =[{
  label:'Home',
  route: '/'
},{
  label:'Calculator',
  route:'/calc'
},{
  label:'History',
  route:'/history'
}]

export function Header (){
    return(
        <header className={style.header}>
          <h1 className={style.title}>Proyecto Técnico Sanz Clima</h1>
          <nav className={style.navigation}>
            <ul className={style.list}>
              {links.map(({label,route})=>(
                <li key={route} >
                  <Link href={route} className={style.item}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}




