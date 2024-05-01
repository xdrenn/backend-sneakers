import { body } from "express-validator";

export const loginValidation = [
  body("email", "Incorrect email").isEmail(),
  body("password", "Password must contain at least five characters").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Incorrect email").isEmail(),
  body("password", "Password must contain at least five characters").isLength({
    min: 5,
  }),
  body("fullName", "Please, enter name").isLength({ min: 3 }),
];

export const sneakersCreateValidation = [
  body("name", "Please, enter name").isString(),
  body("price", "Please, enter price"),
  body("imageUrl", "Неверная ссылка на изображение").optional().isString(),
];
