import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Container } from '../../components/layouts/container/container';
import { GridContainer } from '../../components/grid-container/grid-container';
import { CharacterCard } from '../../components/character/character-card/character-card';
import { Character, Info } from '../../types/api/api.type';
import { apiLink, charactersLink } from '../../static-data';

export const CharactersPage = () => {
  const { isLoading, data } = useFetch<Info<Character[]>>(`${apiLink}${charactersLink}`);

  return (
    <Container>
      <GridContainer XXL={3} XL={2} L={2} M={1}>
        {
          !isLoading && data?.results?.map(
            (character: Character) => <CharacterCard key={character.id} character={character} />,
          )
        }
      </GridContainer>
    </Container>
  );
};
