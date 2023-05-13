export default function NavMobile() {
  return (
    <div className="h-16 mb-2 flex flex-row justify-between items-center sm:hidden">
      <img src="../ham-icon.svg" className="svg_icon" alt="hamburger icon" />
      <p>
        <img src="../user.svg" className="svg_icon inline-block mx-2" alt="user display picture" />Oluwafemi
      </p>
    </div>
  );
}
