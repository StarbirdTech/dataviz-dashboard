import vercelLogo from "../public/vercel.svg";
import starbird from "../public/hunter.jpg";
import Image from "next/image";

import DataTest from "./DataTest";

const NavBar = () => {
  return (
    <div className="flex flex-row m-8">
      <Logo></Logo>
      <div className="grow text-center">
        <DataTest />
      </div>
      <Profile></Profile>
    </div>
  );
};

//! logo not vertically centered and make width based on available height
const Logo = () => {
  return (
    <div className="w-36 h-fit items-center">
      <Image src={vercelLogo} alt="vercel logo" layout="responsive" />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="w-8 ring-4 ring-offset-1 ring-green-600 rounded-full">
      <Image
        src={starbird}
        alt="vercel logo"
        layout="responsive"
        className="rounded-full"
      />
    </div>
  );
};

export default NavBar;
