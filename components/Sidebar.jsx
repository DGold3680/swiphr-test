import Dropdown from "./Dropdown";
import Navlink from "./Navlink";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <div className=" relative h-screen w-48 ">
      <div className="fixed flex flex-col w-max h-screen border-r border-r-gray_B ">
        <div className="mb-4">
          <Logo />
        </div>
        <div className="mb-6">
          <Navlink linkText={"Home"} iconImg={"../home-icon.svg"} />
          <Dropdown title={"Orders"} iconImg={"../order-icon.svg"}/> 
          <Navlink linkText={"Subscriptions"} iconImg={"../reload-icon.svg"} />
          <Navlink linkText={"Customers"} iconImg={"../customer-icon.svg"} />
          <Dropdown title={"Products"} iconImg={"../product-icon.svg"} contents={["All Products","Categories","Attributes","Gift Card","Purchase links"]}/>
          <Dropdown title={"Discount"} iconImg={"../discount-icon.svg"} />
          <Navlink linkText={"Reporting"} iconImg={"../graph-icon.svg"} />
        </div>

        <div className="mt-auto mb-6">
          <Dropdown title={"Oluwafemi"} iconImg={"../user.svg"} />
        </div>
      </div>
    </div>
  );
}
