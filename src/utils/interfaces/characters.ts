export interface ICharacter {
  id: number
  name: string
}

export interface ItemsCharacters {
  name: string
  resourceURI: string
}

export interface StoriesItems extends ItemsCharacters {
  type: string
}

export interface URLCharacter {
  type: string
  url: string
}

export interface ICompleteCharacter {
  id: number
  name: string
  description: string
  modified: string
  resourceURI: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    available: number
    collectionURI: string
    items: ItemsCharacters[]
  }
  events: {
    available: 1
    collectionURI: string
    returned: 1
    items: ItemsCharacters[]
  }
  series: {
    available: number
    collectionURI: string
    returned: number
    items: ItemsCharacters[]
  }
  stories: {
    available: number
    collectionURI: string
    returned: number
    items: StoriesItems[]
  }
  urls: URLCharacter[]
}
