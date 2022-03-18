export default function () {
  this.namespace = 'api';

  this.get('/movies', () => {
    return {
      data: [
        { id: 1, type: 'movies', attributes: { name: 'Interstellar' } },
        { id: 2, type: 'movies', attributes: { name: 'Inception' } },
        { id: 3, type: 'movies', attributes: { name: 'Dunkirk' } },
      ],
    };
  });
}
