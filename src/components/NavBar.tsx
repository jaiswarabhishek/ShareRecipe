import Link from 'next/link';
import * as React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Button , Modal,Checkbox, Label, TextInput,Dropdown} from 'flowbite-react';
import { HiOutlineShare , HiPencil,HiOutlineClipboardList } from 'react-icons/hi';
import { useState,useEffect } from 'react';

type Props = {
  setRecipeData: React.Dispatch<React.SetStateAction<Recipe[]>>
  recipeData: Recipe[]
}


const NavBar: React.FC<Props>= ({setRecipeData, recipeData}) => {

     const [openModal, setOpenModal] = useState(false);
     const [url, setUrl] = useState('');
      const [name, setName] = useState('');
      const [ingredients, setIngredients] = useState('');
      const [instructions, setInstructions] = useState('');



      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const recipe = {
          id: Math.floor(Math.random() * 1000),
          image: url,
          name,
          ingredients: ingredients.split(',') as string[],
          instructions : instructions.split(',') as string[]
        }

       localStorage.setItem('recipeData', JSON.stringify([...recipeData, recipe]))

        setRecipeData((prev) => [...prev, recipe])

        setOpenModal(false)
      }


 
  return (
  <div>
      <Navbar fluid rounded className='w-[60%] mt-5 mx-auto'>
       <Button className='font-bold' color="gray">
        <HiOutlineShare  className="mr-3 h-4 w-4 font-bold" />
        ShareRecipe 
      </Button>
    <Button onClick={() => setOpenModal(true)} className='font-bold text-[2em]'>
        <HiPencil className="mr-3 h-4 w-4 font-bold" />
         Create Recipe
      </Button>
    </Navbar>
     <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
        <Modal.Header>
            <div className="flex gap-1 items-center font-bold">
            <HiOutlineClipboardList/>
            Create Recipe 
            </div>
        </Modal.Header>
        <Modal.Body>
           <form 
            onSubmit={handleSubmit}
     
            className="flex max-w-md flex-col gap-4">
          <div>
              <div className="mb-2 block">
            <Label htmlFor="url" value="Image URL" />
        </div>
        <TextInput
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}

        placeholder='Enter Recipe Image URL'
        id="url" type="url" required shadow />
      </div>



        <div>
        <div className="mb-2 block">
            <Label htmlFor="name" value="Recipe Name" />
        </div>
        <TextInput
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder='Enter Recipe Name'
        id="name" type="text" required shadow />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="ingredients" value="Recipe Ingredients" />
        </div>
        <TextInput
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setIngredients(e.target.value)}
        placeholder='Separate each ingredient with a comma (,)'
         id="ingredients" type="text" required shadow />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="instructions" value="Instructions" />
        </div>
        <TextInput
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInstructions(e.target.value)}
        placeholder='Separate each instruction with a comma (,)'
         id="instructions" type="text" required shadow />
      </div>

      <Button type="submit"> 
        Create Recipe
      </Button>
    </form>
        </Modal.Body>
      </Modal>
  </div> 
  )
}

export default NavBar
