import React, { useState } from 'react';
import './Explore.css';
import Modal from './Modal'; // Importa o modal
import Sidebar from '../SideBar';

const drinks = [
  {
    name: 'BARBADOS PUNCH',
    link: './receitas/barbadosPunch.html',
    image: '/receitas/barbados.jpg',
    imgUm: '/receitas/fotosPagina/barbadosPunch/um.jpg',
    imgDois: '/receitas/fotosPagina/barbadosPunch/dois.jpg',
    imgTres: '/receitas/fotosPagina/barbadosPunch/tres.jpg',
    ingredientes: [
      '1 colher de sopa de geléia de goiaba.',
      '60 ml de água.',
      'Uma colher de sopa de açucar.',
      '60 ml de conhaque.',
      '30 ml de rum.',
      'Meio limão.',
      '2 fatias de laranja.',
      'Gelo',
      'Copo: Old Fashioned'
    ],
    receita: [
      'Esprema o limão no shaker e depois adicione a geleia de goiaba, o açúcar e uma pitada de água morna (30 ml).',
      'Misture para dissolver tudo.',
      'Adicione o restante da água, o conhaque e o rum.',
      'Agite.',
      'Decore com uma fatia de laranja.'
    ]
  },
  {
    name: 'BLOODY MARY',
    link: './receitas/bloodyMary.html',
    image: '/receitas/bloodyMary.jpg',
    imgUm: '/receitas/fotosPagina/bloodyMary/um.jpg',
    imgDois: '/receitas/fotosPagina/bloodyMary/dois.jpg',
    imgTres: '/receitas/fotosPagina/bloodyMary/tres.jpg',
    ingredientes: [
      '90 ml de vodka.',
      '135 ml de suco de tomate',
      '30 ml de suco de limão',
      '1 colher de chá de raiz-forte fresca',
      'Um toque de molho inglês',
      '3-4 gotas de molho picante',
      'Copo: Collins'
    ],
    receita: [
      'Adicione tudo na coqueteleira.',
      'Agite bem',
      'Coe em seu copo Collins',
      'Decore com um talo de aipo.',
      'Aproveite seu brunch.'
    ]
  },
  {
    name: 'CAIPIRINHA',
    link: './receitas/caipirinha.html',
    image: '/receitas/caipirinha.jpg',
    imgUm: '/receitas/fotosPagina/caipirinha/um.jpg',
    imgDois: '/receitas/fotosPagina/caipirinha/dois.jpg',
    imgTres: '/receitas/fotosPagina/caipirinha/tres.jpg',
    ingredientes: [
      '1 Limão',
      '1 Colher de sopa de açucar',
      '60 ml de cachaça',
      'Gelo',
      'Copo: Old Fashioned'
    ],
    receita: [
      'Corte um limão em quatro.',
      'Soque o limão em um copo com açúcar.',
      'Adicione a cachaça e complete com gelo.',
      'Mexa e sirva.',
    ]
  },
  {
    name: 'CASINO',
    link: './receitas/casino.html',
    image: '/receitas/casino.jpg',
    imgUm: '/receitas/fotosPagina/casino/um.jpg',
    imgDois: '/receitas/fotosPagina/casino/dois.jpg',
    imgTres: '/receitas/fotosPagina/casino/tres.jpg',
    ingredientes: [
      '120 ml de gin.',
      '8 ml de licor de marasquino',
      '8 ml de suco de limão',
      '4 gotas de bitter de laranja',
      'Cereja ao marasquino',
      'Gelo',
      'Copo: Coupe'
    ],
    receita: [
      'Mexa bem.',
      'Despeje na taça coupe',
      'Decore com a cereja ao marasquino.'
    ]
  },
  {
    name: 'CUCUMBER GIN',
    link: './receitas/cucumberGin.html',
    image: '/receitas/cucumber.jpg',
    imgUm: '/receitas/fotosPagina/cucumberGin/um.jpg',
    imgDois: '/receitas/fotosPagina/cucumberGin/dois.jpg',
    imgTres: '/receitas/fotosPagina/cucumberGin/tres.jpg',
    ingredientes: [
      '90 ml de gin.',
      '30 ml de suco de limão.',
      'Água com gás.',
      'Fatia de limão.',
      'Fatia de pepino.',
      'Gelo',
      'Copo: Old Fashioned'
    ],
    receita: [
      'Adicione o gin, o suco de limão e o pepino ao copo de mistura.',
      'Amasse os ingredientes.',
      'Adicione gelo.',
      'Complete com água com gás.',
      'Enfeite com uma fatia de limão e uma fatia de pepino.',
    ]
  },
  {
    name: 'GODFATHER',
    link: './receitas/godfather.html',
    image: '/receitas/godFather.jpg',
    imgUm: '/receitas/fotosPagina/godFather/um.jpg',
    imgDois: '/receitas/fotosPagina/godFather/dois.jpg',
    imgTres: '/receitas/fotosPagina/godFather/tres.jpg',
    ingredientes: [
      '50 ml de uísque escocês',
      '50 ml de licor de amaretto',
      'Casca de laranja.',
      'Gelo',
      'Copo: Old Fashioned'
    ],
    receita: [
      'Adicione seu uísque escocês e licor de amaretto à sua coqueteleira.',
      'Quando se trata de bebidas alcoólicas, mexa.',
      'Adicione gelo. Mexa.',
      'Com cuidado, despeje em seu copo Old Fashioned.',
      'Decore com uma casca de laranja.',
    ]
  },
  {
    name: 'GRASSHOPPER',
    link: './receitas/grasshopper.html',
    image: '/receitas/grasshopper.jpg',
    imgUm: '/receitas/fotosPagina/grasshopper/um.jpg',
    imgDois: '/receitas/fotosPagina/grasshopper/dois.jpg',
    imgTres: '/receitas/fotosPagina/grasshopper/tres.jpg',
    ingredientes: [
      '50 ml de conhaque',
      '30 ml de creme de menta verde',
      '30 ml de creme de cacau branco',
      '45 ml de creme de leite fresco',
      'Raspas de chocolate',
      'Copo: Coupe'
    ],
    receita: [
      'Adicione tudo, exceto as raspas de chocolate, em sua coqueteleira com gelo.',
      'Agite',
      'Despeje em sua taça tipo coupe.',
      'Decore artisticamente com raspas de chocolate.'
    ]
  },
  {
    name: 'GREEN FIZZ',
    link: './receitas/greenFizz.html',
    image: '/receitas/greenFizz.jpg',
    imgUm: '/receitas/fotosPagina/greenFizz/um.jpg',
    imgDois: '/receitas/fotosPagina/greenFizz/dois.jpg',
    imgTres: '/receitas/fotosPagina/greenFizz/tres.jpg',
    ingredientes: [
      '60 ml de gin.',
      '1 cholher de chá de creme de menta.',
      'Uma colher de chá de açucar',
      '30 ml de suco de limão.',
      '1 clara de ovo.',
      'Água com gás.',
      '1 tira de casca de limão.',
      'Gelo',
      'Copo: Collins'
    ],
    receita: [
      'Adicione o gin, o crème de menthe, o suco de limão, o açúcar e a clara de ovo no seu shaker com gelo.',
      'Mexa bem.',
      'Coloque o coquetel no shaker e adicione gelo no copo Collins.',
      'Despeje o Green Fizz bem agitado no copo Collins.',
      'Complete com água com gás.',
      'Decore com uma tira de casca de limão.'
    ]
  },
  {
    name: 'MAI TAI',
    link: './receitas/maiTai.html',
    image: '/receitas/maiTai.jpg',
    imgUm: '/receitas/fotosPagina/maiTai/um.jpg',
    imgDois: '/receitas/fotosPagina/maiTai/dois.jpg',
    imgTres: '/receitas/fotosPagina/maiTai/tres.jpg',
    ingredientes: [
      '120 ml de rum',
      '60 ml de suco de limão',
      '30ml ml de curaçao de laranja',
      '30ml ml de xarope de orgeat',
      '8 ml de xarope simples',
      'Gelo',
      'Copo: Collins',
    ],
    receita: [
      'Coloque todos os ingredientes na coqueteleira com o gelo.',
      'Agite bem.',
      'Despeje em seu copo Collins.',
      'Pontos extras se você substituir o copo Collins por uma caneca tiki mug.',
    ]
  },
  {
    name: 'MARGARITA',
    link: './receitas/margarita.html',
    image: '/receitas/margarita.jpg',
    imgUm: '/receitas/fotosPagina/maiTai/um.jpg',
    imgDois: '/receitas/fotosPagina/maiTai/dois.jpg',
    imgTres: '/receitas/fotosPagina/maiTai/tres.jpg',
    ingredientes: [
      '50 ml de conhaque',
      '30 ml de creme de menta verde',
      '30 ml de creme de cacau branco',
      '45 ml de creme de leite fresco',
      'Raspas de chocolate',
      'Copo: Coupe',
    ],
    receita: [
      'Incluir Receita',
    ]
  },
  {
    name: 'MOJITO DE MORANGO',
    link: './receitas/mojitoMorango.html',
    image: '/receitas/mojito.jpg',
  },
  {
    name: 'MOSCOW MULE',
    link: './receitas/moscowMule.html',
    image: '/receitas/moscow.jpg',
  },
  {
    name: 'NEGRONI',
    link: './receitas/negroni.html',
    image: '/receitas/negroni.jpg',
  },
  {
    name: 'OLD FASHIONED',
    link: './receitas/oldFashioned.html',
    image: '/receitas/oldFashioned.jpg',
  },
  {
    name: 'ORANGE NEGRONI',
    link: './receitas/orangeNegroni.html',
    image: '/receitas/orangeNegroni.jpg',
  },
  {
    name: 'QUARTER MILLER',
    link: './receitas/quarterMiller.html',
    image: '/receitas/quarterMiller.jpg',
  },
  {
    name: 'RAMOS GIN',
    link: './receitas/ramosGin.html',
    image: '/receitas/ramosGin.jpg',
  },
  {
    name: 'SOUTHSIDE',
    link: './receitas/southside.html',
    image: '/receitas/southside.jpg',
  },
  {
    name: 'TEQUILA COLLINS',
    link: './receitas/tequilaCollins.html',
    image: '/receitas/tequilaCollins.jpg',
  },
  {
    name: 'WHISKY SOUR',
    link: './receitas/whiskySour.html',
    image: '/receitas/whiskySour.jpg',
  },
];

function Explore() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (drink) => {
    setModalContent(drink); // Passa o objeto completo do drink para o modal
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="explore">
        <h2>Explore nosso cardápio!</h2>
        <div className="explore-content">
          {drinks.map((drink, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${drink.image})` }}
              className="drink-card"
              onClick={() => openModal(drink)}
            >
              <div className='vertical'>
              <p className='textoConteudo'>{drink.name}</p>
              </div>
            </div>
          ))}
        </div>
        {modalContent && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            content={modalContent}
          />
        )}
      </div>
    </>
  );
}

export default Explore;