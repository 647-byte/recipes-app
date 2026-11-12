import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function RecipeDetails() {
  const { id } = useParams();
  
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("המתכון לא נמצא");
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>טוען...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.name}</h1>
          <p>
            זמן הכנה: {recipe.prepTimeMinutes} דקות | זמן בישול: {recipe.cookTimeMinutes} דקות | 
            מנות: {recipe.servings} | רמת קושי: {recipe.difficulty}
          </p>
          <img src={recipe.image} alt={recipe.name} width="300" />
          
          <h3>מצרכים</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>הוראות הכנה</h3>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}