import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

function SidebarLink({ title, link, href, onClick }) {
  let sidebarItem = <></>;
  if (link)
    sidebarItem = (
      <Link
        to={link ? link : "/"}
        className=" w-full h-12 flex items-center justify-end pr-5 py-5 my-1 ease-in-out duration-300 hover:bg-continental hover:text-white cursor-pointer font-bold text-xl text-right"
        onClick={onClick}
      >
        {title}
      </Link>
    );
  if (href)
    sidebarItem = (
      <a
        href={href}
        target="_blank"
        className=" w-full h-12 flex items-center justify-end pr-5 py-0 my-0 ease-in-out duration-300 hover:bg-itn cursor-pointer font-bold text-xl text-right"
        onClick={onClick}
      >
        {title}
      </a>
    );
  return sidebarItem;
}

export default SidebarLink;
