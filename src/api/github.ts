import { IBranch, IRepo } from "types";

const DEFAULT_PER_PAGE = 5;
const SLICE_FROM_THE_END_CHAPTERS = 9;

const normalizeBranchUrl = (url: string) => url.slice(0,-SLICE_FROM_THE_END_CHAPTERS)

export const getReposBySearch = async (search: string, perPage = DEFAULT_PER_PAGE): Promise<IRepo[]> => {
    const res = await fetch(`https://api.github.com/search/repositories?q=${search}&per_page=${perPage}`);

    return (await res.json()).items;
}

export const getRepoBranches = async (url: string): Promise<IBranch[]> => {
    const res = await fetch(normalizeBranchUrl(url));

    return await res.json();
}