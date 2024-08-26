import Image from "next/image";

const History = () => {
    return (<main className="min-h-screen p-4 bg-white">
        <div className="w-full font-mono text-sm bg-white text-center">
            <div className="w-full flex space-x-3 justify-start items-start mt-8">
                <div className="w-5/12 text-start">
                    <h1 className="text-2xl uppercase font-bold text-gray-700 px-4">History</h1>
                    <p className="text-mutedText p-4">This project is created in order to help business managers, companies and employees to deal with a great amount of tasks. rder to help</p>
                </div>
                    <div className="m-1 h-1250 w-150">
                        <Image src="/gallery/3.jpg" width={480} height={480} alt="" className="object-cover"/>
                    </div>
                    <div className="m-1 h-150 w-150">
                        <Image src="/gallery/5.jpg" width={480} height={480} alt="" className="object-cover"/>
                    </div>
                    <div className="m-1 h-150 w-150">
                                <Image src="/gallery/9.jpg" width={380} height={400} alt="" className="object-cover" />
                            </div>
               
            </div>
            </div>
    </main>)
}
export default History;