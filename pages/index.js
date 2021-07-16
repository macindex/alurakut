import React from 'react';
import styled from "styled-components";
import MainGrid from "./src/components/MainGrid/index";
import Box from "./src/components/Box/index";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "./src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "./src/components/ProfileRelations/index";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.gitHubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <a className="boxLink" href={`https://github.com/${props.gitHubUser}`}>
        @{props.gitHubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '',
    title: 'Eu odeio acordar cedo',
    image: 'https://pbs.twimg.com/profile_images/143696361/avatar_400x400.jpg'
  }]);
  const gitHubUser = "macindex";
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    "omariosouto",
    "peas",
    "elolourenco",
    "macindex",
    "felipefialho",
    "juunegreiros",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar gitHubUser={gitHubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriarComunidade(e){
              e.preventDefault();
              const dadosForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosForm.get('title'),
                image: dadosForm.get('image'),
              }
              
              const comAtualizadas = [...comunidades, comunidade];
              setComunidades(comAtualizadas)
              // comunidades.push('Alura stars')
              // setComunidades('Alura stars')
            }}>
              <div>
                <input
                  placeholder="Qual vai sero nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade ?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Qual vai ser o nome da sua comunidade ?"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
          <ul>
              {comunidades.map((iAtual) => {
                return (
                  <li key={iAtual}>
                    <a href={`/users/${iAtual}`}>
                      <img src={iAtual.image} />
                      <span>{iAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smalltitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((iAtual) => {
                return (
                  <li>
                    <a href={`/users/${iAtual}`} key={iAtual}>
                      <img src={`https://github.com/${iAtual}.png`} />
                      <span>{iAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
