import Recipe from "./Recipe";
import { useFetchRecipesQuery } from '../store';

function RecipesList() {
    const { data, isFetching, error } = useFetchRecipesQuery();
    console.log(data);

    let content;
    if (isFetching) {
        content = <div>Fetching recipes...</div>;
    }
    else if (error) {
        content = <div>Error loading recipes.</div>
    }
    else {
        content = data.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
        })
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default RecipesList;