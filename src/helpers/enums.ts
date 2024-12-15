export enum ModalId {
  ADD_CONTENT_MODAL,
  FILTER_MODAL,
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

export enum LoadingState {
  INITIAL,
  LOADING,
  LOADED,
  FAILED,
}

export enum SortCategory {
  DATE_ADDED = "DATE_ADDED",
  ALPHABET_ASC = "ALPHABET_ASC",
  RATING = "RATING",
  RELEASE_DATE = "RELEASE_DATE",
}
