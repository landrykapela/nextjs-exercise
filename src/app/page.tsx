'use client'
import { useContext } from "react";
import { BsArrow90DegRight, BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import { PhotoContext } from "./layout";
import Image from "next/image";

export default function Home() {

  const {photos,setPhotos} = useContext(PhotoContext)

  return (
    <main className="p-4 bg-white text-center">
      <div className="w-full h-full text-center">
        <h1 className="text-4xl text-gray-700 uppercase">Home</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {photos.map((photo:any)=>{
          return (<div className="w-500"><Image src={photo.imageUrl} alt={photo.relatedTo} key={photo.uuid} width={500} height={500}/></div>)
        })}
      </div>
    </main>
  );
}
