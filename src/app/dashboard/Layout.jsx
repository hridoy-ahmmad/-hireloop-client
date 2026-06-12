import { SideBar } from '@/DashBoardComponent/SideBar';

const DashboardLayout = ({ children }) => {

    return (
        <div className='container mx-auto min-h-screen flex'>
            <SideBar />
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};
export default DashboardLayout;