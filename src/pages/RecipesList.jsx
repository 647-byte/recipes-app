import axios from "axios";
import { useEffect, useState } from "react";

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const conectDb = async () => {
            try {
                const { data } = await axios.get("https://dummyjson.com/recipes");
                setRecipes(data.recipes);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        conectDb();
    },[])
    return <div>
        <h1>מתכונים</h1>
        {(loading || error) && <p>{loading ? "...טוען" : error}</p>}
        <ul>
            {recipes.map(r=><li key={r.id}>{r.name}</li>)}
        </ul>
    </div>
}
export default RecipesList;