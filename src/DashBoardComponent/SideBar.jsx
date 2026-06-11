
import {  Bell, Envelope, Gear, House, LayoutSplitSideContentRight, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export function SideBar() {
    const navItems = [
        { icon: House, label: "Home" },
        { icon: Magnifier, label: "Search" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];

    const sideLinks = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <button
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                type="button"
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </button>
        ))}
    </nav>

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 min-h-screen  border-r border-slate-800 p-5">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    <p className="text-sm text-slate-400">Manage your account</p>
                </div>

                <div className="space-y-2">
                    {sideLinks}
                </div>
            </aside>

            {/* Mobile Drawer */}
            <div className="lg:hidden">
                <Drawer>
                    <Button variant="secondary">
                        
                      <LayoutSplitSideContentRight/>
                        Menu
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content placement="left">
                            <Drawer.Dialog>
                                <Drawer.CloseTrigger />
                                <Drawer.Header>
                                    <Drawer.Heading>Navigation</Drawer.Heading>
                                </Drawer.Header>
                                <Drawer.Body>
                                    {sideLinks}
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </>
    );
}