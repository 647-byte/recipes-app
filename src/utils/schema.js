import Joi from "joi";
const schema=Joi.object({
    email:Joi.string().email({tlds:{allow:false}}).required().messages({
        'string.empty': 'אימייל הוא שדה חובה',
        'string.email':'כתובת האימייל אינה תקינה'
    }),
    password:Joi.string().min(6).required().messages({
        'string.empty': 'סיסמה היא שדה חובה',
        'string.min':'הסיסמה חייבת להיות באורך של 6 תווים לפחות'
    })
})
export default schema;