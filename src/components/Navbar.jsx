import {useState} from 'react';
import {logo,menu,close} from '../assets';
import {navLinks} from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
   <nav className='navbar w-full flex py-6 justify-between items-center'>
      <img src={logo} alt="LOGO Image" className="w-[126px] h-[38px]"/>;
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) =>(

          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' :'mr-7'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[25px] cursor-pointer h-[25px] object-contain' onClick={()=> setToggle((prev)=>!prev)}/>
          <div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-10 rounded right-0 min-w-[140px] my-8 mx-4  sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav,index) =>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' :'mb-4'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
      </ul>
          </div>
      </div>

   </nav>
  )
}

export default Navbar