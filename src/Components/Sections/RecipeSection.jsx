import React, { useState } from 'react'
function RecipeSection() {
      const [activeRecipe, setActiveRecipe] = useState('recipe1');
      const handleRecipeClick = (recipeId) => {
        setActiveRecipe("");
        setActiveRecipe(recipeId);
      };
    const recipes = [
        {
          id: 'recipe1',
          name: 'Chicken Biryani',
          description: 'A flavorful combination of rice, tender chicken, and aromatic spices layered and cooked to perfection.',
          image: '/Picture28.svg'
        },
        {
          id: 'recipe2',
          name: 'Butter Chicken',
          description: 'Tender chicken pieces in a rich, creamy tomato-based curry with butter and aromatic spices.',
          image: '/Picture28.svg'
        },
        {
          id: 'recipe3',
          name: 'Palak Paneer',
          description: 'Fresh spinach pureed and cooked with Indian cottage cheese and spices.',
          image: '/Picture28.svg'
        },
        {
          id: 'recipe4',
          name: 'Dal Makhani',
          description: 'Creamy black lentils slow-cooked with butter and spices.',
          image: '/Picture28.svg'
        },
        {
          id: 'recipe5',
          name: 'Naan Bread',
          description: 'Traditional Indian bread baked in a tandoor, perfect for scooping up curries.',
          image: '/Picture28.svg'
        }
      ];
  return (
<section id="recipes-section" className="relative w-screen min-h-screen max-lg:h-auto bg-[url('/slide3.svg')] bg-no-repeat bg-center bg-cover bg-fixed max-md:text-center overflow-hidden content-center">
        <div className="absolute left-0 w-screen h-full bg-black bg-opacity-65 top-0"> </div>
          <div className="container mx-auto flex flex-col justify-center gap-8  px-20 max-md:px-10 max-sm:px-4 max-md:pt-4 max-md:pb-4">
            <h1 className="text-white text-8xl max-md:text-6xl font-bold relative max-md:text-center max-md:w-full">
              RECIPES
            </h1>
            <div className="flex h-full max-md:flex-col max-md:items-center gap-8 z-10">
              {/* Left Side - Recipe Names */}
              <div className="flex flex-col gap-2 border-r-4 border-[#006241] w-full  md:w-3/5">
                {recipes.map((recipe) => (
                  <div 
                    key={recipe.id}
                    className={`py-2 px-4 cursor-pointer ${
                      activeRecipe === recipe.id 
                        ? 'bg-[#006241]' 
                        : 'hover:bg-[#006241] transition-colors'
                    }`}
                    onClick={() => handleRecipeClick(recipe.id)}
                  >
                    <h3 className="text-white text-xl">{recipe.name}</h3>
                  </div>
                ))}
              </div>

              {/* Right Side - Recipe Details */}
              <div className="flex flex-col gap-4 items-center relative h-full pl-12 max-md:pl-0 w-full">
                <div className="mb-8">
                  <h2 className="text-white text-2xl mb-4">DESCRIPTION:</h2>
                  <p className="text-white">
                    {recipes.find(r => r.id === activeRecipe)?.description}
                  </p>
                </div>

                {/* Recipe Image - Positioned bottom right */}
                <div className="h-1/2">
                  <img 
                    src={recipes.find(r => r.id === activeRecipe)?.image} 
                    alt={recipes.find(r => r.id === activeRecipe)?.name}
                    className="w-[400px] max-md:w-[300px] max-sm:w-[200px] "
                  />
                </div>
              </div>
            </div>
          </div>
       
      </section>
  )
}

export default RecipeSection
