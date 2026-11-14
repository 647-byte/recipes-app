import { useNavigate } from "react-router";
import { login } from "../../services/auth";
import { useState } from "react";
const Uncontrolled = () => {
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const saveData = (data) => {
        const newData = {
            email: data.get('email'),
            password: data.get('password')
        }
        if (login(newData))
            navigate('/recipes');
        else {
            setErrors('אימייל או סיסמה שגויים');
        }
    }
    return <form action={saveData}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" defaultValue='chef@recipes.com'></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>
        {errors && <p>{errors}</p>}
        <button type="submit">להתחברות</button>
    </form>
}
// אי אפשר לבדוק תקינות בזמן ההקלדה, כי בטופס הזה אין state שמחובר לשדות
// הדרך היחידה לקבל את הערכים היא כשהטופס נשלח, דרך ה action
export default Uncontrolled;