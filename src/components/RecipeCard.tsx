import React from 'react';
import { Card } from 'flowbite-react';
import {useState,useContext } from 'react';
import { Button , Modal} from 'flowbite-react';
import {MdDelete} from 'react-icons/md';
import {HiPencil,HiOutlineShare} from 'react-icons/hi';
import RecipeContext from '@/contexts/recipeContext';
import FormModal from './FormModal';
import { FaRegHeart,FaRegComment } from "react-icons/fa";



const RecipeCard= () => {

  const {recipeData} = useContext(RecipeContext);
  const [alert, setAlert] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  console.log(recipeData);
  return (
    <>
      <div className="grid w-[90%] grid-cols-4 place-items-center mx-auto text-center font-bold text-gray-700 mt-10 gap-5" data-testid="recipe-card">
        { recipeData?.map((recipe) => (
          <Card key={recipe.id} className="max-w-sm border-0 " renderImage={() => ( <img src={recipe.image} alt="Picture of the author" className="w-auto h-32 sm:h-48 object-cover rounded-t-lg " />)}>

            <div className='flex justify-evenly gap-0 mt-0'>
              <div className="flex items-center justify-center text-gray-700 dark:text-gray-200 font-bold"><FaRegHeart className="w-5 h-5 text-[rgb(63 131 248 / 0.5)] cursor-pointer" /></div>
              <div className="flex items-center justify-center text-gray-700 dark:text-gray-200"><HiOutlineShare className="w-5 h-5 text-[rgb(63 131 248 / 0.5)] cursor-pointer" /></div>
              <div className="flex items-center justify-center text-gray-700 dark:text-gray-200"><FaRegComment className="w-5 h-5 text-[rgb(63 131 248 / 0.5)] cursor-pointer" /></div>
            </div>
            <h5 className="text-xl font-bold text-left tracking-tight text-gray-900 dark:text-white">
              {recipe.name.length > 30
                ? `${recipe.name.slice(0, 24)}...`
                : recipe.name}
            </h5>

            <p className=" text-sm text-left text-gray-500 dark:text-gray-400">
              {recipe.description.length > 100
                ? `${recipe.description.slice(0, 100)}...`
                : recipe.description}
            </p>

            <div className="flex justify-between gap-2 mt-0">
              <Button onClick={() => setOpenModal(!openModal)} color="gray" className="font-bold w-full"> <HiPencil className="mr-1 h-4 w-4 font-bold" />Edit</Button>
              <Button onClick={() => setAlert(!alert)} color="red" className="font-bold w-full"><MdDelete className="mr-1 h-4 w-4 font-bold" />Delete</Button>
            </div>
          </Card>
        ))}
        <Modal show={alert} onClose={() => setAlert(false)} size="lg">
          <Modal.Header>
            <div className="flex gap-1 items-center font-bold"><MdDelete />Delete Recipe</div>
          </Modal.Header>
          <Modal.Body>
            <div className="text-xl font-bold">Are you sure you want to delete this recipe ?</div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" className="w-1/4 font-bold" onClick={() => setAlert(false)}> No</Button>
            <Button color="red" className="w-1/4 font-bold" onClick={() => setAlert(false)}> Yes</Button>
          </Modal.Footer>
        </Modal>
        <FormModal openModal={openModal} setOpenModal={setOpenModal} typeForm="Edit" />
      </div>
    </>
  );
};

export default RecipeCard;
