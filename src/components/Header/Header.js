import React from "react"
import "./header.scss"
import {
  FaEject,
  FaUserGraduate,
  FaBuffer,
  FaToolbox,
  FaIdBadge,
} from "react-icons/fa"

const Header = props => {
  const { activeMenuList, activeMenu } = props
  const handleCheck = e => {
    const currentList = e.currentTarget.dataset.id
    activeMenuList(currentList)
  }
  const menuList = [
    {
      name: "About me",
      id: "about",
      menuIcon: <FaEject />,
    },
    {
      name: "Resume",
      id: "resume",
      menuIcon: <FaUserGraduate />,
    },
    {
      name: "Skills",
      id: "skills",
      menuIcon: <FaBuffer />,
    },
    {
      name: "Works",
      id: "works",
      menuIcon: <FaToolbox />,
    },
    {
      name: "Contact",
      id: "contact",
      menuIcon: <FaIdBadge />,
    },
  ]
  return (
    <header className="header">
      <ul className="nav">
        {menuList.map((item, index) => {
          const activeTab = `tab-${item.id}`
          return (
            <li
              key={index}
              onClick={e => handleCheck(e)}
              data-id={`tab-${item.id}`}
              className={activeMenu === activeTab ? "active" : ""}
            >
              <span
                className={` nav-icon ${
                  activeMenu === activeTab ? "active" : ""
                }`}
              >
                {item.menuIcon}
              </span>
              <span className="menu-text">{item.name}</span>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
