import { FC, useContext } from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { AppstoreOutlined } from '@ant-design/icons'

import { TextContext } from '@context/index'

const { SubMenu } = Menu

const MenuBar: FC = () => {
  const history = useHistory()
  const { txt } = useContext(TextContext)

  const handleClick = ({ key }: any) => {
    if (key === "1") history.push('/employees')
    if (key === "2") history.push('users')
  }

  return (
    <Menu
      onClick={ handleClick }
      style={ { width: 256 } }
      defaultSelectedKeys={ ['1'] }
      defaultOpenKeys={ ['sub1'] }
      mode="inline"
    >
      <SubMenu key="sub2" icon={ <AppstoreOutlined/> } title={ txt?.menu.li.instances.title }>
        <Menu.Item key="1">{ txt?.menu.li.instances.ul.employee }</Menu.Item>
        <Menu.Item key="2">{ txt?.menu.li.instances.ul.user }</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default MenuBar

