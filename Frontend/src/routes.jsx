/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Icons from "./views/Icons";
import Machinery from "./views/Machinery";
import User from "./views/User";


const routesmain = [
    {
        upgrade: true,
        path: "/upgrade",
        name: "Upgrade to PRO",
        icon: "",
        component: Machinery,
        layout: "/admin"
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "faHome",
        component: Machinery,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "nc-icon nc-circle-09",
        component: User,
        layout: "/admin"
    },
    {
        path: "/machineries",
        name: "Maquinarias",
        icon: "nc-icon nc-notes",
        component: Machinery,
        layout: "/admin"
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "nc-icon nc-paper-2",
        component: Machinery,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "nc-icon nc-atom",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "nc-icon nc-pin-3",
        component: Machinery,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: Machinery,
        layout: "/admin"
    }
    ,
    {
        path: "/test",
        name: "Test",
        icon: "nc-icon nc-bell-55",
        component: Machinery,
        layout: "/admin"
    }
];

export default routesmain;
