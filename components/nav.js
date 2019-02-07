import React from 'react'
import Link from 'next/link'
import X from './icons/x'
import Hamburger from './icons/hamburger'
import Drawer from 'react-motion-drawer';
import '../static/styles/main.scss'

const links = [
  { href: '/', label: 'Home' },
  { href: '/whyteachers', label: 'Why Teachers?' },
  { href: '/ourwork', label: 'Our Work' },
  { href: '/about', label: 'About us' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const buttons = [
  { href: '/donate', label: 'Donate' },
  { href: '/imateacher', label: 'I\'m a teacher' },
].map(butt => {
  butt.key = `nav-link-${butt.href}-${butt.label}`
  return butt
})

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {drawerOpen: false};
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }
  
  render() {
    return (
      <div className="nav">
        <div className="navBarSection">  
          <div className="navItems">
            {links.map(({ key, href, label }) => (
              <div key={key}>
                <Link href={href}>
                  <a className={this.props.navColor}>{label.toUpperCase()}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className="navButtons">
            {buttons.map(({ key, href, label }) => (
              <div key={key}>
                <Link href={href}>
                  <a className={this.props.navColor}>{label.toUpperCase()}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className="hamburgerContainer" onClick={this.toggleDrawer}>
            <Hamburger className="hamburger" />
          </div>
          <img src="/static/images/Logo.png" className="imageLogo"/> 
        </div>
        <Drawer open={this.state.drawerOpen} width={250} right={true} className="drawer">
          <img src="/static/images/Logo.png" className="imageLogo"/> 
          <div className="drawerXClose" onClick={this.toggleDrawer}>
            <X width="34" 
                height="32"
            />
          </div>
          <div className="navigationDrawerLinks">
            <Link href='/'><a className="black">{'home'.toUpperCase()}</a></Link>
            <Link href='/about'><a className="black">{'about'.toUpperCase()}</a></Link>
            <Link href='/whyteachers'><a className="black">{'Why teachers'.toUpperCase()}</a></Link>
            <Link href='/donate'><a className="black">{'Donate'.toUpperCase()}</a></Link>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Nav
