import { Children } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="sidebar-container">
                <div className="sidebar">
                    <Sidebar />
                    <div className="sidebar-footer">
                    <p>Footer del Sidebar</p>
                </div>
                </div>
                <div className="content">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout
