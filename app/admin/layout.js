import SideMenu from "@/components/sidemenu";


export default function AdminLayout({ children }) {
  return (
   <div className="admin"> 
   <div className="admin-sideBar">
      <SideMenu />
   </div>
   <div className="admin-content">
      <div className="admin-header">
        <h1>Welcome</h1>
      </div>
      <div className="admin-container">
        {children}
      </div>
   </div>
   
   </div>
  );
}
