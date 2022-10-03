import { useState } from "react";

// sempre que a função do react começa com 'use' é um hook

/** Conceito de Imutabilidade 
 * 
 * não devemos alterar o conteudo de uma variável diretamente
 * 
 * usuarios = ['user1', 'user2', 'user3']
 * 
 * para adicionar mais um usuário ao array poderíamos fazer
 * usuarios.push('user4')
 * 
 * mas no react, usamos o conceito de imutabilidade, ou seja,
 * criamos um novo array, e fazemos o spread do antigo e no final 
 * adicionamos o novo user - melhoria de performance
 * 
 * novoUsuarios = [...usuarios, 'user4']
 */

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
