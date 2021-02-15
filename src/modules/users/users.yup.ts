import { polyglot } from 'polyglot-rpg';
import * as Yup from 'yup';

export const signupValidation = Yup.object().shape({
    name: Yup
        .string()
        .required(polyglot.yup.locale('required_field', 'ptBR', { field: 'name' })),
    email: Yup
        .string()
        .email(polyglot.yup.locale('invalid_email', 'ptBR'))
        .required(polyglot.yup.locale('required_field', 'ptBR', { field: 'email' })),
    _password: Yup
        .string()
        .min(8, polyglot.yup.locale('characters_min', 'ptBR', { field: 'password' }))
        .required(polyglot.yup.locale('required_field', 'ptBR', { field: 'password' }))
});

export const loginValidation = Yup.object().shape({
    email: Yup
        .string()
        .email(polyglot.yup.locale('invalid_email', 'ptBR'))
        .required(polyglot.yup.locale('required_field', 'ptBR', { field: 'email' })),
    password: Yup
        .string()
        .required(polyglot.yup.locale('required_field', 'ptBR', { field: 'password' })),
});