const mainUrl: string = 'https://rickandmortyapi.com/api/';

class Api {
  static getCharacter(id: number) {
    fetch(`${mainUrl}/character/${id}`);
  }
}

export const api = new Api();
