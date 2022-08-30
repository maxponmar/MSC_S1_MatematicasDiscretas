import { useState } from "react";
import ChevronRight from "../../assets/chevron-right.svg";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className={`flex items-center justify-center absolute bg-itn rounded-full h-8 w-8 top-[calc(50vh-2.5rem)] cursor-pointer z-50 ease-in-out duration-300 ${
          showSidebar ? "left-[180px] rotate-180	" : "ml-1 left-[-10px]"
        }`}
        onClick={() => setShowSidebar((oldState) => !oldState)}
        onMouseEnter={() => setShowSidebar((oldState) => !oldState)}
      >
        <img className="my-auto h-full" src={ChevronRight} />
      </div>
      <div
        className={`absolute flex h-[calc(100vh-104px)] sm:h-[calc(100vh-124px)] ${
          showSidebar ? "w-full" : "w-0"
        }`}
      >
        <div
          className={`py-5 flex flex-col place-content-between bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  bg-stone-400 w-[200px] z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div>
            <SidebarLink
              title="Inicio"
              link="/"
              onClick={() => setShowSidebar(false)}
            />
            <SidebarLink
              title="Unidad 1"
              link="/unidad1"
              onClick={() => setShowSidebar(false)}
            />
          </div>
        </div>
        {showSidebar && (
          <div
            className={`h-full bg-transparent  w-[calc(100%-200px)]`}
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
