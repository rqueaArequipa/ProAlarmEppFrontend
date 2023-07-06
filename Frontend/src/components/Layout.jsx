import { Children } from "react"

function Layout({ children }) {
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar">
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
