import * as React from 'react'
import { Navbar,Button } from 'flowbite-react';
import { HiOutlineShare , HiPencil} from 'react-icons/hi';
import FormModal from './FormModal';
import { useState } from 'react';

const NavBar:React.FC=()=> {
const [openModal, setOpenModal] = useState(false);

 return (
    <div>
       <Navbar fluid rounded className="w-full rounded-full  bg-[#f5f5f5]  md:w-[60%] mt-5 mx-auto">
           <Button className="font-bold" color="gray">  <HiOutlineShare className="mr-3 h-4 w-4 font-bold" /> ShareRecipe </Button>
           <Button onClick={() => setOpenModal(true)} className="font-bold text-[1.5em] md:text-[2em]"><HiPencil className="mr-3 h-4 w-4 font-bold" /> Create Recipe</Button>
       </Navbar>
       <FormModal openModal={openModal} setOpenModal={setOpenModal} typeForm='Create' />
    </div>
);
}

export default NavBar
