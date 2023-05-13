
import Sidebar from "./Sidebar";
import NavMobile from "./NavMobile";

export default function Navbar() {
  return (
    <div>
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="sm:hidden">
        <NavMobile />
      </div>
    </div>
  );
}
