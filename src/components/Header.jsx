
export default function Header() {
  return (
		<header className='h-[10vh] w-full border border-b-slate-900/20 shadow-md flex items-center justify-between px-[3rem]'>
			<div>
				<a href='/' className='hover:underline text-3xl font-bold  '>
					M<span className="text-indigo-600">S</span>
				</a>
			</div>

			<ul className='flex items-center gap-[1.2rem] justify-end '>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
				<li>
					<button className="bg-indigo-600 text-white px-[1rem] py-[0.5rem] rounded-md hover:bg-indigo-700">Ro'yxatdan o'tish</button>
				</li>
			</ul>
		</header>
	);
}