
import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';


const products = [
  { id: 1, title: 'Produto 1', description: 'inperdoável', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-imperdoavel-20220113201454.jpg' },
  { id: 2, title: 'Produto 2', description: 'Enola Holmes', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-enola-holmes-20220113201349.jpg' },
  { id: 3, title: 'Produto 3', description: 'Troco Em Dobro', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-troco-em-dobro-20220113201646.jpg' },
  { id: 4, title: 'Produto 4', description: 'Esquadrão 6', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-esquadrao-6-20220113201418.jpg' },
  { id: 5, title: 'Produto 5', description: 'A Barraca Do Beijo 2', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-a-barraca-do-beijo-2-20220113201135.jpg' },
  { id: 6, title: 'Produto 6', description: 'O Irlandês', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-o-irlandes-20220113201555.jpg' },
  { id: 7, title: 'Produto 7', description: 'Resgate', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-resgate-20220113201625.jpg' },
  { id: 8, title: 'Produto 8', description: 'Bird Box', image: 'https://tm.ibxk.com.br/2023/03/22/filmes-de-suspense-na-netflix-22095224666087.jpg' },
  { id: 9, title: 'Produto 9', description: 'Alerta Vermelho', image: 'https://static.stealthelook.com.br/wp-content/uploads/2022/01/o-ranking-dos-filmes-mais-assistidos-da-netflix-alerta-vermelho-20220113201304.jpg' },
  { id: 10, title: 'Produto 10', description: 'Descrição do Produto 10', image: 'url-da-imagem-10' },
  { id: 11, title: 'Produto 11', description: 'Descrição do Produto 11', image: 'url-da-imagem-11' },
  { id: 12, title: 'Produto 12', description: 'Descrição do Produto 12', image: 'url-da-imagem-12' },
  { id: 13, title: 'Produto 13', description: 'Descrição do Produto 13', image: 'url-da-imagem-13' },
  { id: 14, title: 'Produto 14', description: 'Descrição do Produto 14', image: 'url-da-imagem-14' },
  { id: 15, title: 'Produto 15', description: 'Descrição do Produto 15', image: 'url-da-imagem-15' },
  { id: 16, title: 'Produto 16', description: 'Descrição do Produto 16', image: 'url-da-imagem-16' },
  { id: 17, title: 'Produto 17', description: 'Descrição do Produto 17', image: 'url-da-imagem-17' },
  { id: 18, title: 'Produto 18', description: 'Descrição do Produto 18', image: 'url-da-imagem-18' },
  { id: 19, title: 'Produto 19', description: 'Descrição do Produto 19', image: 'url-da-imagem-19' },
  { id: 20, title: 'Produto 20', description: 'Descrição do Produto 20', image: 'url-da-imagem-20' },


  
];

const App = () => (
  <div>
    <Title>Top Filmes da <span style={{ color: 'red' }}>Netflix</span></Title>
    <Description>
      CONFIRA TOP 20 <span style={{ color: 'blue' }}>FILMES</span>
    </Description>
    <Products products={products} />
  </div>
);
export default App;
