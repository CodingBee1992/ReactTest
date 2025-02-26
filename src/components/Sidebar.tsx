import { FaHome, FaSearch, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

const Sidebar = () => {
	return (
		<aside className="sidebar sticky top-0 h-dvh w-20 bg-[#1A1C1E] text-amber-700">
			<ul className="p-4 flex flex-col justify-between items-center h-full">
				<div className="top">
					<li className="mb-2">
						<div className="flex items-center">
							<FaHome className=" mb-3 cursor-pointer" size={24} />
						</div>
					</li>
					<li className="mb-2">
						<div className="flex items-center">
							<FaUser className=" mb-3 cursor-pointer" size={24} />
						</div>
					</li>
					<li className="mb-2">
						<div className="flex items-center">
							<FaSearch className=" mb-3 cursor-pointer" size={24} />
						</div>
					</li>
				</div>

				<div className="bottom">
					<li>
						<IoMdSettings className='cursor-pointer' size={24} />
						<FaUser className="mt-4 cursor-pointer" size={24} />
					</li>
				</div>
			</ul>
		</aside>
	)
}

export default Sidebar
