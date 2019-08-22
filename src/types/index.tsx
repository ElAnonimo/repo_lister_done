export interface IBranch {
    name: string,
}

export interface IRepoOwner {
    avatar_url: string
}

export interface IRepo {
    id: number,
    name: string,
    description: string,
    branches_url: string,
    owner: IRepoOwner
}
  