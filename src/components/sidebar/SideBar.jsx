import React from "react";
import { Menu } from "antd"
import { useState } from "react";
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import "./SideBar.scss";
import { Link } from "react-router-dom";
// import BrandLogo from "../Images/Logo.tsx";

const SideNavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const items = [
        // { key: '0', icon: <span style={{color: "#666cff"}}><BrandLogo /></span>, label: <div style={{fontWeight: '700'}}>Purfull</div> },
        { key: '1', icon: <PieChartOutlined />, label: <Link to="/dashboard/reports">dashboard</Link>  },
        { key: '2', icon: <ContainerOutlined />, label: "Template",
            children: [
              { key: "2-1", label: <Link to="/dashboard/new-template">Add Template</Link> },
              { key: "2-2", label: <Link to="/dashboard/my-template">My Template</Link> },
            //   { key: "2-2", label: "Account Management" },
            //   { key: "2-3", label: "Preferences" },
            ],  },
        { key: '3', 
            icon: <DesktopOutlined />, 
            label: "Channels",
            children: [
              { key: "3-1", label: <Link to="/dashboard/contact">Whatsapp</Link> },
            //   { key: "2-2", label: "Account Management" },
            //   { key: "2-3", label: "Preferences" },
            ], },
        {
          key: "4",
          icon: <AppstoreOutlined />,
          label: <Link to="/dashboard/settings">settings</Link>
        },
        {
          key: "5",
          icon: <AppstoreOutlined />,
          label: <Link to="/dashboard/settings">Support</Link>
        },
    ];

    return (
        <div className="side-nav-bar-container">
            <div className="side-nav-logo-container" style={{height: '70px'}} 
            // onMouseEnter={() => setCollapsed(false)}
            >
                <div className="w-full text-center" style={{display: "flex"}}>
                    <span style={{color: "#6200ed"}}>
                        {/* <BrandLogo /> */}
                    </span>
                    <div className="text-center m-auto" style={{color: '#3b4056' ,fontSize: '1.32rem', display: collapsed ? 'none' : 'flex' }}>Message app</div>

                </div>
                <div className=""></div>
            </div>
            <Menu 
            // onMouseEnter={() => setCollapsed(false)}
            //     onMouseLeave={() => setCollapsed(true)}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                // theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                style={{backgroundColor: '#F7F7F9', border: 'none'}} // change this if needed
                className="menu-bar"
                
            />
        </div>
    )
}

export default SideNavBar;