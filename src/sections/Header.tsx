import ArrowRight from "@/assets/arrow-right.svg";
import logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"

const Navbar = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white">
        <div className="inline-flex gap-3 items-center text-sm">
          <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
      <div className="container ">
        <div className="flex justify-between items-center">
        <Image src={logo} alt="logo" width={40} height={40}/>
        <MenuIcon className="h-5 w-5 md:hidden"/>
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="#">About</a>
          <a href="#">Feature</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
        </nav>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
