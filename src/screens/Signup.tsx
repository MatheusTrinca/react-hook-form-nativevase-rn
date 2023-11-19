import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Center, Heading, VStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

type FormProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'A confirmação da senha não confere')
})

export const Signup = () => {

  const { control, handleSubmit, formState: {errors} } = useForm<FormProps>({
    resolver: yupResolver(schema)
  });

  const handleSignup = (data: FormProps) => {
    console.log(data);
  }

  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24}>Crie sua Conta</Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              errorMessage={errors?.name?.message}
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              errorMessage={errors?.email?.message}
              placeholder="E-mail"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller 
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              errorMessage={errors?.password?.message}
              placeholder="Senha"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller 
          name="confirmPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              errorMessage={errors?.confirmPassword?.message}
              placeholder="Confirme sua senha"
              onChangeText={onChange}
              value={value}
            />
          )}
        />   

        <Button title="Cadastrar" onPress={handleSubmit(handleSignup)} />
      </Center>
    </VStack>
  );
};

// 26
