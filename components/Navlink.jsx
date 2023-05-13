export default function Navlink({ linkText, iconImg }) {
  return (
    <div className="bg-transparent flex my-4 rounded-md  ml-6 mr-2 py-1.5 px-3.5 items-center hover:bg-green_B active:bg-green_B  hover:font-semibold active:font-semibold cursor-pointer">
      <img src={iconImg} alt="link-icon" className="inline fill-green_A stroke-green_A" />
      <p className="px-2.5 inline">{linkText}</p>
    </div>
  );
}
