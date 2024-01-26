import React from 'react';

import './CreateProductsPage.css';

export function CreateProductsPage() {
  const enviarFormulario = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que o formulário seja submetido normalmente

    const formData = new FormData(event.currentTarget);

    
    try {
      const response = await fetch('http://localhost:3333/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Dados do formulário:', formData.get('name'), formData.get('marca'), formData.get('price'));
        // Atualize a interface do usuário conforme necessário
      } else {
        console.error('Erro na solicitação:', response.status);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    
    <div className="formulario">
      <h2>Create Products Page</h2>
      <div className='formulario-area'>
        <form onSubmit={enviarFormulario} className='formulario-input'>
          <label htmlFor="name">Nome Do Produto:</label>
          <input type="text" placeholder='Nome Do Produto' name='name' className='nameOfProduct' />

          <label htmlFor="marca">Marca Do Produto:</label>
          <input type="text" placeholder='Marca Do Produto' name='marca' className='nameOfProduct' />

          <label htmlFor="price">Preço Do Produto:</label>
          <input type="text" placeholder='Preço Do Produto' name='price' className='priceOfProduct' />

          <label htmlFor="quantidade">Quantidade (cx):</label>
          <input type="text" placeholder='Quantidade (cx)' name='quantidade' className='priceOfProduct' />

          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
