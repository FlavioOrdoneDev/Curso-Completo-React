import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api/api';
import Error from '../../Helper/Error'

function LoginPasswordLost() {
  const login = useForm();
  const {data, loading, error, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const {url, options} = PASSWORD_LOST({login : login.value, url: 'http://localhost:3000/login/perdeu' });
      const {json} = await request(url, options);
      console.log(json)
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a Senha?</h1>
      { data ? (
         <p>{data}</p> 
        ) : (
          <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login} />
            { loading ? <Button>Enviando...</Button> : <Button>Enviar Email</Button> }
          </form> 
        )
      }
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
