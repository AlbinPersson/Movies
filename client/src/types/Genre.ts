export enum GenreName {
  DRAMA = "Drama",
  CRIME = "Crime",
  ACTION = "Action",
  DOCUMENTARY = "Dokumentary",
  THRILLER = "Thriller",
  HISTORY = "History",
  WAR = "War",
}

export interface Genre {
  _id: string;
  name: string;
}
