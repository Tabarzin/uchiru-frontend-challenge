import { Inter } from 'next/font/google';
import cn from 'classnames';
import styles from './styles.module.css';
import NavMenu from '../nav-menu';


const inter = Inter({ subsets: ['latin'] })

export default function Layout ({children}){
    return (
        <div className={cn (inter.className, styles['layout'])}>
            <NavMenu />
            {children}
        </div>
    )
}