import { Rating } from 'react-simple-star-rating';

function Recipe({ recipe }) {

    const handleRating = (rate) => {
        // this will be a PATCH request
    };

    const ingredientsArray = recipe.ingredients.split(", ");
    const renderedIngredients = ingredientsArray.map((ingredient, index) => {
        return <li key={index} className="mb-1">{ingredient}</li>;
    });

   let content = (
    <div className="max-w-md mx-auto bg-white p-4 border border-gray-300 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
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
            <Rating onClick={handleRating} initialValue={recipe.rating} />
        </div>
        </div>
        
    );

    return <div>{content}</div>
}

export default Recipe;