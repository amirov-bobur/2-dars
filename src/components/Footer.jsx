import { MdEmail, MdHome } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className='h-[20vh] py-[1rem] px-[3rem] w-full bg-slate-700 text-slate-50 flex gap-[2rem] items-center justify-start'>
      <FooterContact />
      <FooterNav />
      <FooterLocation/>
		</footer>
	);
}

function FooterContact() {
	return (
		<ul className="flex flex-col gap-2">
			<li>
				<h1 className='font-bold text-xl'>Contact</h1>
			</li>

			<li className='flex items-center justify-start gap-[0.5rem]'>
				<MdEmail />
				<a className='text-indigo-500 hover:underline' href='mailto:ozodbekdeveloper@gmail.com'>
					ozodbekdeveloper@gmail.com
				</a>
			</li>

			<li className='flex items-center justify-start gap-[0.5rem]'>
				<FaTelegram />
				<a className='text-indigo-500 hover:underline' href='https://t.me/Ozodbek_developer'>
					Ozodbek_developer
				</a>
			</li>

			<li className='flex items-center justify-start gap-[0.5rem]'>
				<FaPhone />
				<a className='text-indigo-500 hover:underline' href='tel:+998901234567'>
          +998 90 123 45 67
				</a>
			</li>
		</ul>
	);
}

function FooterNav() {
	return (
		<ul className="flex flex-col gap-2">
			<li>
				<h1 className='font-bold text-xl'>Pages</h1>
			</li>

			<li className='flex items-center justify-start gap-[0.5rem]'>
				<MdHome />
				<a href='/'>
					Home
				</a>
			</li>
			<li className='flex items-center justify-start gap-[0.5rem]'>
				<a href='/'>
					About
				</a>
			</li>
			<li className='flex items-center justify-start gap-[0.5rem]'>
				<a href='/'>
					Contact
				</a>
			</li>

			
		</ul>
	);
}


function FooterLocation() {
  return (
		<div className="flex-1 h-full">
      <iframe
        className="w-full h-full"
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773625.3375141341!2d62.560912262463866!3d40.7625971386801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5969c3d2514a0b%3A0xa9a6a0477e41b75b!2sPeshku%20District%2C%20Bukhara%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1709826758422!5m2!1sen!2s'
				allowfullscreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
}


