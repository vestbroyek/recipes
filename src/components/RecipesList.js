import Recipe from "./Recipe";

function RecipesList() {
    // hardcode for now
    const recipes = [{
        id: 1,
        title: "Lasagna",
        ingredients: ["1 egg", "2 cheese"],
        method: "Lorem ipsum",
        notes: "Ipsum lorem",
        rating: 4
    }]

    const renderedRecipes = recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
    })

    return (
        <div>
            {renderedRecipes}
        </div>
    );
}

export default RecipesList;