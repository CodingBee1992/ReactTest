import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import Tabs from './components/Tabs'

const App = () => {
	return (
		<div>
			<div className='flex'>
				<div className=" relative">
				<Sidebar />
				</div>
				<div className='w-full bg-zinc-100'>
					<Profile />
					<Tabs />
				</div>
			</div>
		</div>
	)
}

export default App
