
export default function Card({ iconPath="", title="title", content="content" }) {
  return (
    <div className="mb-3 p-4 rounded-md border-2 text-black_A border-gray_B fill-black stroke-black  hover:fill-green_A focus:fill-green_A active:fill-green_A hover:stroke-green_A focus:stroke-green_A active:stroke-green_A hover:border-green_A focus:border-green_A active:border-green_A hover:text-green_A focus:text-green_A active:text-green_A ">
      <div>
        <svg width="28" height="28" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg" className="inline-block svg_icon mr-2">{iconPath}</svg>
        <p className="inline-block text-lg">{title}</p>
      </div>
      <p className="mt-2.5 text-sm text-gray_C">{content}</p>
    </div>
  );
}



