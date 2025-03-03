class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
   _apiKey = 'apikey=3d3264ceff7b7cd2ac676b095784f585';

   getResource = async (url) => {
      let res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   };

   getAllCharacters = async () => {
      const res = await this.getResource(
         `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
      );
      return res.data.results.map(this._transformCharacter);
   };

   getCharacter = async (id) => {
      const res = await this.getResource(
         `${this._apiBase}characters/${id}?${this._apiKey}`
      );
      return this._transformCharacter(res.data.results[0]);
   };

   _transformCharacter = (char) => {
      let newDescr = '';
      if (char.description.length === 0) {
         newDescr = 'Sorry! Description not loaded';
      } else if (char.description.length > 150) {
         newDescr = char.description.slice(0, 150) + '...';
      }
      return {
         name: char.name,
         description: newDescr,
         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extention,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
      };
   };
}

export default MarvelService;
