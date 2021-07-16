import styled from "styled-components";
import MainGrid from './src/components/MainGrid/index'
import Box from './src/components/Box/index'
import { AlurakutMenu, OrkutNostalgicIconSet } from './src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from './src/components/ProfileRelations/index'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
function ProfileSidebar(props){
  return (
    <Box>
        <img src={`https://github.com/${props.gitHubUser}.png`} style={{ borderRadius: '8px'}}/>
    </Box>

  )
}


export default function Home() {
  const gitHubUser = 'elolourenco';
  const pessoasFavoritas = ['macindex','omariosouto', 'peas', 'elolourenco']

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar gitHubUser={gitHubUser}/>
      </div>


      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
          Bem vindo(a)
          </h1>
         <OrkutNostalgicIconSet />
        </Box>
      </div>

      <div
        className="profileRelationsArea"
        style={{ gridArea: 'profileRelationsArea' }}>
        
        
        <ProfileRelationsBoxWrapper>
        <h2 className="smalltitle">
          Pessoas da Comunidade ({pessoasFavoritas.length})
        </h2>
        
          
          {pessoasFavoritas.map((iAtual)=>{
            return (
              <li>
                <a href={`/users/${iAtual}`}key={iAtual}>
                      <img src={`https://github.com/${iAtual}.png`} />
                      <span>{iAtual}</span>
                    </a>
              </li>
            )
          })}
        </ProfileRelationsBoxWrapper>

        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
    </>
  );
}
