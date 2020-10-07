import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export function Header() {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex flex-row justify-around pt-2 ">
        <img className="h-20" src="logo5.png" alt="" />
        <div className="flex flex-row items-center space-x-10 ">
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            HOME
          </p>
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            MENU
          </p>
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            RESERVATION
          </p>
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            GALLERY
          </p>
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            ABOUT
          </p>
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            BLOG
          </p>
          <p className="font-normal text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            CONTACT
          </p>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <div className="space-x-2 text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            <FaFacebookF />
          </div>
          <div className="space-x-2 text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            <FaTwitter />
          </div>
          <div className="space-x-2 text-white transition duration-300 ease-in-out cursor-pointer hover:text-primary-700 ">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
