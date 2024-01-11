import React from 'react';
import Image from 'next/image';
import { Card } from 'flowbite-react';
import { useEffect } from 'react';

type Props = {
  recipeData: Recipe[];
};

const RecipeCard: React.FC<Props>
= ({recipeData}) => {

  console.log(recipeData)
    return (<>
      
        <div
            className="grid w-[90%] grid-cols-4 place-items-center flex-wrap  mx-auto text-center font-bold text-gray-700 mt-10 gap-5"
            data-testid="recipe-card"
        >
      {
      recipeData?.map((recipe) => (
      <Card
      key={recipe.id}
      className="max-w-sm"
      renderImage={() => ( 
        <img
          src={recipe.image} 
          alt="Picture of the author"
          className="w-full h-32 sm:h-48 object-cover"
        />
      )

    }    
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {recipe.name}
      </h5>
        {/* Description */}
        <p className="mt-2  text-sm text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eaque corporis 
        </p>
        </Card>
             
            ))
      }

      </div>
  </>
    );
};

export default RecipeCard;
