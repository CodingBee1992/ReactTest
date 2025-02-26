import {  useState } from "react"
import { FaCamera } from "react-icons/fa"


const Profile = () => {

    const [bannerURL,setBanerURL]=useState("https://placehold.co/2200x400")

    const [profileUrl,setProfileUrl]=useState("https://placehold.co/100")

    const handleBannerChange =(e:any)=>{
        const file = e.target.files[0]

        if(file){
            setBanerURL(URL.createObjectURL(file))
        }
    }

    const handleProfileChange =(e:any)=>{
        const file = e.target.files[0]

        if(file){
            setProfileUrl(URL.createObjectURL(file))
        }
    }

  return (
    <div className="relative w-vw ">
        <div className="relative">
            <img src={bannerURL} className="w-full h-60 object-cover" alt="background image" />

            <button className="absolute top-2 right-2 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-950  duration-800">
                <label htmlFor="banner" className="cursor-pointer">
                    <FaCamera  size={24}/>
                </label>

                <input type="file" id="banner" accept="image/*" className="hidden" onChange={handleBannerChange} />
            </button>
        </div>

        {/* Channel Logo */}
        <div className="flex items-center py-4 px-4">
            <img src={profileUrl} alt="Channel logo" className="w-40 h-40 object-cover rounded-full border-white relative"/>

            <button className="absolute ml-[3.5rem] mt-[10rem] bg-amber-700 text-white p-2 rounded-full hover:bg-amber-950 duration-800">
                <label htmlFor="profile" className="cursor-pointer">
                    <FaCamera  size={24}/>
                </label>
                <input type="file" id="profile" accept="image/*" className="hidden" onChange={handleProfileChange}  />
            </button>

            <div className="ml-4 mt-4  ">
                <h1 className="text-2xl font-bold ">CodingBee WebDev</h1>
                <p>22M views</p>
                <p className="mt-2">
                    This is the beginning of the CodingBee Channel. More information coming soon
                </p>
                <button className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-950 duration-800 cursor-pointer">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Profile