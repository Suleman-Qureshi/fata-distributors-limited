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
<section id="recipes-section" className="relative min-h-screen bg-[url('/slide3.svg')] bg-no-repeat bg-center bg-cover bg-fixed max-md:text-center overflow-hidden">
        <div className="relative z-30 h-full bg-black bg-opacity-30">
          <div className="container mx-auto flex flex-col justify-center  px-20 max-md:pt-4 ">
            <h1 className="text-white text-8xl max-md:text-6xl font-bold relative mb-16">
              RECIPES
            </h1>
            <div className="flex max-md:flex-col max-md:items-center gap-0">
              {/* Left Side - Recipe Names */}
              <div className="flex flex-col space-y-4 border-r-4 border-[#006241] w-full md:w-3/5 h-[400px] overflow-auto">
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
              <div className="flex flex-col gap-4 items-center relative min-h-[400px] pl-12 w-full">
                <div className="mb-8">
                  <h2 className="text-white text-2xl mb-4">DESCRIPTION:</h2>
                  <p className="text-white">
                    {recipes.find(r => r.id === activeRecipe)?.description}
                  </p>
                </div>

                {/* Recipe Image - Positioned bottom right */}
                <div className="w-[300px]">
                  <img 
                    src={recipes.find(r => r.id === activeRecipe)?.image} 
                    alt={recipes.find(r => r.id === activeRecipe)?.name}
                    className="h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default RecipeSection
