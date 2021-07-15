/* eslint-disable import/extensions */
import { MainGrid } from '@/components/MainGrid';
import { Box } from '@/components/Box';
import { ProfileSidebar } from '@/components/ProfileSidebar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '@/utils/aluraCommons';
import { ProfileRelationsBoxWrapper } from '@/components/ProfileRelationsBoxWrapper';
import { CustomInput } from '@/components/Input';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type CommunityProps = {
  id: string;
  title: string;
  imageUrl: string;
};

export default function Home() {
  const gitHubUser = 'rodrigodiasf1984';
  const [communities, setCommunities] = useState([
    {
      id: uuidv4(),
      title: 'OCD',
      imageUrl:
        'https://media-manager.noticiasaominuto.com/1920/1515840552/naom_5a53a9532b1ea.jpg',
    },
  ]);
  const favoritePeople = [
    'caiomoura1994',
    'omariosouto',
    'jvrviegas',
    'Fe-souza',
    'GustavoBlaze',
    'Samuel-Rodrigues',
  ];

  function handleCreateCommunity(event: FormEvent) {
    event.preventDefault();
    const fieldsFormData = new FormData(event.target);
    console.log(typeof fieldsFormData.get('image'));
    const newCommunity = {
      id: uuidv4(),
      title: fieldsFormData.get('title'),
      imageUrl: fieldsFormData.get('image'),
    };
    const updatedCommunities = [...communities, newCommunity];
    setCommunities(updatedCommunities);
  }

  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea">
          {/* <ProfileImage gitHubUser={gitHubUser} /> */}
          <ProfileSidebar githubUser={gitHubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCreateCommunity}>
              <CustomInput
                type="text"
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                ariaLabel="Qual vai ser o nome da sua comunidade?"
              />

              <CustomInput
                type="text"
                placeholder="Colocque uma url para usarmos de capa"
                name="image"
                ariaLabel="Colocque uma url para usarmos de capa"
              />
              <button type="submit">Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <ul>
              {communities?.length > 0 &&
                communities?.map((community: CommunityProps) => {
                  return (
                    <li key={community.id}>
                      <a
                        rel="noopener noreferrer"
                        href={`${community.imageUrl}`}
                        target="_blank"
                      >
                        <img src={community.imageUrl} alt={community.title} />
                        <span>{community.title}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePeople.length})
            </h2>
            <ul>
              {favoritePeople.map(user => {
                return (
                  <li key={user}>
                    <a
                      rel="noopener noreferrer"
                      href={`https://github.com/${user}`}
                      key={user}
                      target="_blank"
                    >
                      <img src={`https://github.com/${user}.png`} alt={user} />
                      <span>{user}</span>
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
