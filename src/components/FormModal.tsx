import React,{useState,useEffect, Dispatch, SetStateAction,useContext} from 'react'
import { Button , Modal, Label, TextInput} from 'flowbite-react';
import { HiOutlineClipboardList } from 'react-icons/hi';
import RecipeContext from '@/contexts/recipeContext';

type StateUpdater<T> = Dispatch<SetStateAction<T>>;

interface Props<T> {
  openModal: T;
  setOpenModal: StateUpdater<T>;
  typeForm: string;
}

const FormModal:React.FC<Props<boolean>>=({openModal,setOpenModal,typeForm})=>{
   
const {recipeData,setRecipeData} = useContext(RecipeContext);

const [url, setUrl] = useState("");
const [name, setName] = useState("");
const [ingredients, setIngredients] = useState("");
const [instructions, setInstructions] = useState("");
const [description, setDescription] = useState("");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const recipe= {
        id: Math.floor(Math.random() * 1000),
        image: url,
        name,
        description,
        ingredients: ingredients.split(",") as string[],
        instructions: instructions.split(",") as string[]   
    };

    localStorage.setItem("recipeData", JSON.stringify([...recipeData, recipe]));

    setRecipeData([...recipeData, recipe]);

    setOpenModal(false);
};


  return (
        <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
            <Modal.Header>
                <div className="flex gap-1 items-center font-bold"> <HiOutlineClipboardList /> {typeForm} Recipe </div>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4" >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Recipe Name" />
                        </div>
                        <TextInput
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                            placeholder="Enter Recipe Name"
                            id="name"
                            type="text"
                            required
                            shadow
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Recipe Description"
                            />
                        </div>
                        <TextInput
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setDescription(e.target.value)}
                            placeholder="Enter Recipe Description"
                            id="description"
                            type="text"
                            required
                            shadow
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="ingredients" value="Recipe Ingredients" />
                        </div>
                        <TextInput
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setIngredients(e.target.value)}
                            placeholder="Separate each ingredient with a comma (,)"
                            id="ingredients"
                            type="text"
                            required
                            shadow
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="instructions" value="Instructions" />
                        </div>
                        <TextInput
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setInstructions(e.target.value)}
                            placeholder="Separate each instruction with a comma (,)"
                            id="instructions"
                            type="text"
                            required
                            shadow
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="url" value="Image URL" />
                        </div>
                        <TextInput
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setUrl(e.target.value)}
                            placeholder="Enter Recipe Image URL"
                            id="url"
                            type="url"
                            required
                            shadow
                        />
                    </div>
                    <Button type="submit">{typeForm} Recipe</Button>
                </form>
            </Modal.Body>
        </Modal>
  )
}

export default FormModal
