function SideNavbar() {
    return (
        <div className="flex flex-col space-y-5 h-full border">
            {/* Logo Section */}
            <a className="flex items-center justify-start py-4 px-6" href="./rac_dashboard.html">
                <img src="../../public/assets/images/DRDO-logo.png" alt="EBRS Logo" className="h-24 w-24" />
                <h2 className="text-4xl font-bold text-[#19509c]">EBRS</h2>
            </a>

            {/* Menu Section */}
            <div className="">
                <p className="text-gray-400 uppercase px-6 py-4">Menu</p>
                <nav>
                    <ul className="flex flex-col space-y-2 items-center">
                        <li className="w-full flex justify-center">
                            <a href="./rac_dashboard.html" className="nav-link flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition w-[80%]">
                            <span class="material-symbols-outlined">dashboard</span>
                                <span className="font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li className="w-full flex justify-center">
                            <a href="./rac_analytics.html" className="nav-link flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition w-[80%]">
                                <span className="material-symbols-outlined">finance</span>
                                <span className="font-medium">Analytics</span>
                            </a>
                        </li>
                        <li className="w-full flex justify-center">
                            <a href="./rac_panels.html" className="nav-link flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition w-[80%]">
                                <span className="material-symbols-outlined">groups</span>
                                <span className="font-medium">Panels</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Tools Section */}
            <div className="">
                <p className="text-gray-400 uppercase px-6 py-4">Tools</p>
                <nav>
                    <ul className="flex flex-col space-y-2 items-center">
                        <li className="w-full flex justify-center">
                            <a href="./settings.html" className="nav-link flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition w-[80%]">
                                <span className="material-symbols-outlined">settings</span>
                                <span className="font-medium">Settings</span>
                            </a>
                        </li>
                        <li className="w-full flex justify-center">
                            <a href="./help.html" className="nav-link flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition w-[80%]">
                                <span className="material-symbols-outlined">help</span>
                                <span className="font-medium">Help</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}


window.SideNavbar = SideNavbar;