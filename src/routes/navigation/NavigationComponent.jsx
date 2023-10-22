import {Fragment} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crownlogo } from '../../assets/crown.svg'
import '../navigation/navigationComponent.scss'
function NavigationComponent() {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Crownlogo className='logo' />
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/signIn'>
                    sign in
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default NavigationComponent