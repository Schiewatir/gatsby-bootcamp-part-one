import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import headersStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata{
            title
          }
        }
      }`)
    return (
        <header className={headersStyles.header}>
            <h1><Link className={headersStyles.title} activeClassName={headersStyles.activeNavItem} to="/">{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={headersStyles.navList}>
                    <li>
                        <Link className={headersStyles.navItem} activeClassName={headersStyles.activeNavItem} to="/">Home </Link>
                    </li>
                    <li>
                        <Link className={headersStyles.navItem} activeClassName={headersStyles.activeNavItem} to="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link className={headersStyles.navItem} activeClassName={headersStyles.activeNavItem} to="/contact"> Contact </Link>
                    </li>
                    <li>
                        <Link className={headersStyles.navItem} activeClassName={headersStyles.activeNavItem} to="/about"> About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
