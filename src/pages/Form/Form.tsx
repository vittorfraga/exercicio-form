import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from "../../validations/validationSchema";
import { ValidationError } from "../../validations/validationErrors";

import sucessImg from "../../assets/woman-success.png";
import EyeOpen from "../../assets/open-eye.svg";
import EyeClose from "../../assets/close-eye.svg";

import "./style.css";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Form = () => {
  const {
    register,
    reset,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(validationSchema) });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleCancel = () => {
    setFormSubmitted(false);
    reset();
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      reset();
    }, 20000);
  };

  return (
    <>
      {formSubmitted ? (
        <div className="success">
          <img className="sucessImg" src={sucessImg} alt="Success" />
          <span className="successSpan">Cadastro efetuado com sucesso!</span>
        </div>
      ) : (
        <div className="form-side">
          <h1>Cadastre-se</h1>
          <form onSubmit={onSubmit(handleSubmit)}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="Nome"
              />
              <ValidationError name={errors.name?.message} />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Email"
              />
              <ValidationError name={errors.email?.message} />
            </div>

            <div className="form-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                placeholder="Senha"
              />
              <img
                src={showPassword ? EyeOpen : EyeClose}
                alt="Show/hide password"
                onClick={() => setShowPassword(!showPassword)}
              />
              <ValidationError name={errors.password?.message} />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirme a senha"
              />
              <ValidationError name={errors.confirmPassword?.message} />
            </div>

            <button type="submit" className="btn btn-add">
              Cadastrar
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
