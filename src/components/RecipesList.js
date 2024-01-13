import Recipe from "./Recipe";
import { useFetchRecipesQuery } from '../store';

function RecipesList() {
    const { data, isFetching, error } = useFetchRecipesQuery();

    let content;
    if (isFetching) {
        content = <div>Fetching recipes...</div>;
    }
    else if (error) {
        content = <div>Error loading recipes.</div>
    }
    else {
        content = (
            <div className="flex flex-wrap -mx-2">
                {data.map((recipe) => (
                <div key={recipe.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                    <Recipe recipe={recipe} />
                </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default RecipesList;