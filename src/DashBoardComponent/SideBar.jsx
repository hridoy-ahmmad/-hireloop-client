
import { Bell, CirclePlusFill, Envelope, Gear, House, LayoutSplitSideContentRight, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function SideBar() {
    const navItems = [
        { icon: House, label: "Home", href: '/'},
        { icon: Magnifier, label: "Search", href: '/'},
        { icon: Bell, label: "Notifications", href: '/'},
        { icon: Envelope, label: "Messages", href: '/'},
        { icon: Person, label: "Profile", href: '/'},
        { icon: Gear, label: "Settings", href: '/'},
        { icon: CirclePlusFill, label: "Add New Job", href: 'http://localhost:3000/dashboard/recruiter/jobs/new' },
    ];

    const sideLinks = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                href={item.href}
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                type="button"
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
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

                        <LayoutSplitSideContentRight />
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