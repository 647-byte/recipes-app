import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import schema from "../../utils/schema";
import { login } from "../../services/auth";
import { useNavigate } from "react-router";
import { useState } from "react";
const Rhf = () => {
    const navigate=useNavigate();
    const [generlError,setGenerlError]=useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
         resolver: joiResolver(schema),
        defaultValues:{email:'chef@recipes.com',password:''} });
    const onSubmit = (data) => {
        if(login(data))
            navigate('/recipes');
        else setGenerlError('אימייל או סיסמה שגויים');
    }
    return <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')}></input>
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')}></input>
        {errors.password && <p>{errors.password.message}</p>}
        {generlError && <p>{generlError}</p>}
        <button type="submit">להתחברות</button>
    </form>
}
export default Rhf;