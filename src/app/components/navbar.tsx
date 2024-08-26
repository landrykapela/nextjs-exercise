'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { menuItems } from "../utils/constants";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exit } from "process";
const Navbar = () => {
    const [showMenu,setShowMenu] = useState<boolean>(false)
    const handleMenu = ()=>{
        console.log(showMenu);
        setShowMenu(!showMenu)
    }
    const pathname = usePathname()
    return (<div className="w-full flex justify-between align-items-center  bg-white border border-b-gray-400 mx-auto py-3">
        <span className="uppercase text-gray-700">Logo</span>
        <div className="hidden md:block">
            <div className="flex space-x-3">
                {menuItems.map(item => {
                    return <Link href={item.path} key={item.path} className={`px-3 py-2 text-gray-700 hover:text-primary ${pathname == item.path ? 'border-b-primary border-b-2' : 'border-transparent border-b-2'}`}>{item.title}</Link>
                })}

            </div>
        </div>
        <div className="text-gray-700 text-2xl md:hidden">
            <GiHamburgerMenu onClick={handleMenu}/>
        </div>
       
        <AnimatePresence>
        {showMenu ?
        <motion.div className="fixed inset-0 w-6/12 ms-auto bg-slate-100 md:hidden" initial={{x: 300}} animate={{x:0, transition:{ease: "linear",duration:0.5}}} exit={{x: 300,transition:{ease:"linear",duration:0.5}}}>
        <MdClose className="text-2xl text-gray-700 ms-auto" onClick={handleMenu}/>
        <div className="flex flex-col">
                {menuItems.map(item => {
                    return <Link onClick={handleMenu} href={item.path} key={item.path} className={`px-3 py-2 text-gray-700 hover:text-primary ${pathname == item.path ? 'bg-primary border-b-2' : 'border-transparent border-b-2'}`}>{item.title}</Link>
                })}

            </div>
        </motion.div>:null}</AnimatePresence>

    </div>)
}
export default Navbar;