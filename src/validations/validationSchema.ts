import { object, string, ref } from "yup";

export const validationSchema = object().shape({
  name: string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .required("O nome é obrigatório"),
  email: string()
    .email("Informe um email válido! ex: email@email.com")
    .required("O email é obrigatório"),
  password: string()
    .required("Informe a senha")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"|,.<>/?=-]).*$/,
      "A senha deve ter pelo menos uma letra maiúscula e um caractere especial"
    ),
  confirmPassword: string()
    .oneOf([ref("password"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});
