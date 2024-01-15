import { Rating } from 'react-simple-star-rating';
import { useDeleteRecipeMutation, useEditRecipeMutation } from '../store';
import { GoTrashcan } from 'react-icons/go';
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import Modal from 'react-modal';

function Recipe({ recipe }) {
    const [deleteRecipe, deleteRecipeResults] = useDeleteRecipeMutation();
    const [editRecipe, editRecipeResults] = useEditRecipeMutation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formValue, setFormValue] = useState(recipe);

    const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

    const handleRating = (rating) => {
        editRecipe({
            ...recipe,
            rating
        });
    };

    const handleDeleteRecipe = (event) => {
        event.preventDefault();
        deleteRecipe(recipe);
    };

    const handleEditRecipe = (event) => {
        event.preventDefault();
        editRecipe(formValue);
        closeModal();
    };

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

    const ingredientsArray = recipe.ingredients.split(", ");
    const renderedIngredients = ingredientsArray.map((ingredient, index) => {
        return <li key={index} className="mb-1">{ingredient}</li>;
    });

   let content = (
    <div className="max-w-md mx-auto bg-white p-4 border border-gray-300 rounded shadow-md">
        <div className="flex items-center">
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <div className="ml-auto">
                <button className="mr-2" onClick={handleDeleteRecipe}>
                    <GoTrashcan/>
                </button>
                <button className="mr-2" onClick={navigateToForm}>
                    <CiEdit/>
                </button>
                    <Modal
                        isOpen={modalIsOpen} 
                        onRequestClose={closeModal} 
                        contentLabel="Recipe modal"
                        appElement={document.getElementById('root') || undefined}
                    >
                        <button onClick={closeModal}>close</button>
                        <h2>Edit recipe</h2>
                        <form onSubmit={handleEditRecipe}>
                            <label>Title:</label>
                            <input onChange={handleChange} defaultValue={recipe.title} values={recipe.title} name="title" className={inputStyle} />

                            {/* TODO: handle array input */}
                            <label>Ingredients:</label>
                            <input onChange={handleChange} defaultValue={recipe.ingredients} values={recipe.ingredients} name="ingredients" className={inputStyle}/>

                            <label>Method:</label>
                            <input onChange={handleChange} defaultValue={recipe.method} values={recipe.method} name="method" className={inputStyle}/>

                            <label>Notes:</label>
                            <input onChange={handleChange} defaultValue={recipe.notes} values={recipe.notes} name="notes" className={inputStyle}/>

                            <label>Rating:</label>
                            <input onChange={handleChange} defaultValue={recipe.rating} values={recipe.rating} name="rating" type="number" className={inputStyle}/>

                            <button type="submit" className="button">Update</button>
                        </form>                       
                    </Modal>
            </div>
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