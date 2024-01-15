import { Rating } from 'react-simple-star-rating';
import { useDeleteRecipeMutation } from '../store';
import { GoTrashcan } from 'react-icons/go';

function Recipe({ recipe }) {
    const [deleteRecipe, deleteRecipeResults] = useDeleteRecipeMutation();

    const handleRating = (rate) => {
        // this will be a PATCH request
    };

    const handleDeleteRecipe = () => {
        deleteRecipe(recipe);
    };

    const ingredientsArray = recipe.ingredients.split(", ");
    const renderedIngredients = ingredientsArray.map((ingredient, index) => {
        return <li key={index} className="mb-1">{ingredient}</li>;
    });

   let content = (
    <div className="max-w-md mx-auto bg-white p-4 border border-gray-300 rounded shadow-md">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <button className="mr-2" onClick={handleDeleteRecipe}>
                <GoTrashcan/>
            </button>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-1">Ingredients:</h3>
            <ul className="list-disc ml-4">
            {renderedIngredients}
            </ul>
        </div>
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-1">Method:</h3>
            <p>{recipe.method}</p>
        </div>
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-1">Notes:</h3>
            <p>{recipe.notes}</p>
        </div>
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-1">Rating:</h3>
            <Rating onClick={handleRating} initialValue={recipe.rating} SVGclassName="inline-block"/>
        </div>
    </div>
        
    );

    return <div>{content}</div>
}

export default Recipe;