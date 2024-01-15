import Recipe from "./Recipe";
import Modal from 'react-modal';
import { useState } from "react";
import { useFetchRecipesQuery, useAddRecipeMutation } from '../store';

function RecipesList() {
    const { data, isFetching, error } = useFetchRecipesQuery();
    const [addRecipe, addRecipeResults] = useAddRecipeMutation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formValue, setFormValue] = useState({
        title: "",
        ingredients: [],
        method: "",
        notes: "",
        rating: 0
    });
    const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    const navigateToForm = () => {
        setModalIsOpen(true);
    };

    const closeModal =() => {
        setModalIsOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title, ingredients, method, notes, rating } = formValue;
        // console.log("Recipe: ", title, ingredients, method, notes, rating);
        addRecipe({
            title,
            ingredients,
            method,
            notes,
            rating
        });
    };


    let content;
    if (isFetching) {
        content = <div>Fetching recipes...</div>;
    }
    else if (error) {
        content = <div>Error loading recipes.</div>
    }
    else {
        content = (
            <div>
                <div>
                    <h1 className="text-2xl font-semibold mb-2">Recipes</h1>
                    <button onClick={navigateToForm} className="text-1xl font-semibold mb-2">+ Add recipe</button>
                    {/* TODO: refactor modal */}
                    <Modal
                        isOpen={modalIsOpen} 
                        onRequestClose={closeModal} 
                        contentLabel="Hello world"
                        appElement={document.getElementById('root') || undefined}
                    >
                        <button onClick={closeModal}>close</button>
                        <h2>Add a recipe</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Title:</label>
                            <input onChange={handleChange} values={formValue.title} name="title" className={inputStyle} />

                            {/* TODO: handle array input */}
                            <label>Ingredients:</label>
                            <input onChange={handleChange} values={formValue.ingredients} name="ingredients" className={inputStyle}/>

                            <label>Method:</label>
                            <input onChange={handleChange} values={formValue.method} name="method" className={inputStyle}/>

                            <label>Notes:</label>
                            <input onChange={handleChange} values={formValue.notes} name="notes" className={inputStyle}/>

                            <label>Rating:</label>
                            <input onChange={handleChange} values={formValue.rating} name="rating" type="number" className={inputStyle}/>

                            <button type="submit" className="button">Create</button>
                        </form>                       
                    </Modal>
                </div>
                <div className="flex flex-wrap -mx-2">
                    {data.map((recipe) => (
                    <div key={recipe.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                        <Recipe recipe={recipe} />
                    </div>
                    ))}
                </div>
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