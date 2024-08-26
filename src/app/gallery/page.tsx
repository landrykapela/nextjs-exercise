'use client'
import Image from "next/image";
import { useContext } from "react";
import { GiClothes, GiTie } from "react-icons/gi";
import { MdFamilyRestroom, MdSchool } from "react-icons/md";
import { TabContext } from "../layout";

const Gallery = () => {
    const {activeTab,setActiveTab} = useContext(TabContext)
    const handleTabClick = (index:number)=>{
        setActiveTab(index)
    }
    return (
        <main className="min-h-screen p-4 bg-white">
            <div className="w-full font-mono text-sm bg-white text-center">
                <h1 className="text-4xl text-gray-700 uppercase my-4 font-bold">our Gallery</h1>
                <p className="text-mutedText my-4">This project is created in order to help business</p>
                <div className="pt-8 w-11/12 md:w-6/12 flex justify-center mx-auto">
                    {
                        [{ title: 'Corporate', icon: <GiTie /> }, { title: 'Family', icon: <MdFamilyRestroom /> }, { title: 'School', icon: <MdSchool /> }, { title: 'Fashion', icon: <GiClothes /> }]
                            .map((item,index) => {
                                return (<div key={item.title} onClick={()=>handleTabClick(index)} className={`cursor-pointer flex text-black font-bold p-2 ${index == activeTab ? ' border-b-primary border-b-4' : 'border-b-transparent'}`}>
                                    <span className={`text-sm md:text-2xl me-2 ${index == activeTab ? 'text-primary' : ''}`}>{item.icon}</span>
                                    <span className="uppercase text-sm md:text-2xl">{item.title}</span>
                                </div>)
                            })
                    }

                </div>
                <div className="w-11/12 flex justify-evenly mx-auto">
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="m-4 md:m-1 w-600">
                            <Image src="/gallery/2.jpg" width={600} height={500} alt="" />
                        </div>
                        <div className="m-4 grid grid-cols-2 gap-1  md:m-1 ">
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                        </div>
                        <div className="m-4 grid grid-cols-2 gap-1 md:m-1">
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                            <div className="m-1 md:m-1">
                                <Image src="/gallery/2.jpg" width={480} height={480} alt="" />
                            </div>
                        </div>
                        <div className="m-4 md:m-1 w-600">
                            <Image src="/gallery/2.jpg" width={600} height={500} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>)
}
export default Gallery;