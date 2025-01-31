import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
function RecipeSection() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
      const [activeRecipe, setActiveRecipe] = useState('recipe1');
      const handleRecipeClick = (recipeId) => {
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
<section id="recipes-section" className="relative min-h-screen bg-black">
        {/* Background Container with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y }}
          >
            <img 
              src="/slide3.svg" 
              alt="Background" 
              className="w-full h-[120%] object-cover object-center transform -translate-y-1/4 inset-0 opacity-50"
            />
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="relative z-30 h-full">
          <div className="container mx-auto px-6 pt-32">
            {/* Title */}
            <h1 className="text-white text-8xl font-bold relative mb-16">
              RECIPES
            </h1>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-0">
              {/* Left Side - Recipe Names */}
              <div className="flex flex-col space-y-4 border-r-4 border-[#006241]">
                {recipes.map((recipe) => (
                  <div 
                    key={recipe.id}
                    className={`p-4 cursor-pointer ${
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
              <div className="flex flex-col relative min-h-[400px] pl-12">
                <div className="mb-8">
                  <h2 className="text-white text-2xl mb-4">DESCRIPTION:</h2>
                  <p className="text-white">
                    {recipes.find(r => r.id === activeRecipe)?.description}
                  </p>
                </div>

                {/* Recipe Image - Positioned bottom right */}
                <div className="absolute bottom-0 right-0 w-[300px]">
                  <img 
                    src={recipes.find(r => r.id === activeRecipe)?.image} 
                    alt={recipes.find(r => r.id === activeRecipe)?.name}
                    className="w-full h-auto rounded-lg"
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
