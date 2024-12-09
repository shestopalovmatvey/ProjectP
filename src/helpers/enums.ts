// TODO удалить EXAMPLE_MODAL
export enum ModalId {
  ADD_CONTENT_MODAL,
  EXAMPLE_MODAL,
}

export enum Categories {
  FILMS = "films",
  BOOKS = "books",
  MUSICS = "musics",
  GAMES = "games",
  CHANEL = "chanel",
}

export const CategoryTitles: Record<Categories, string> = {
  [Categories.FILMS]: "Фильмы",
  [Categories.BOOKS]: "Книги",
  [Categories.MUSICS]: "Музыка",
  [Categories.GAMES]: "Игры",
  [Categories.CHANEL]: "Каналы",
};
