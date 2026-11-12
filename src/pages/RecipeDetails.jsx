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

  return (
    <div>
      <h1>מתכון מספר {id}</h1>
    </div>
  );
}