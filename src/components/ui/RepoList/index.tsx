import React from 'react';
import {IRepo, IBranch} from 'types';
import RepoItem from '../RepoItem';
import {Table} from 'react-bootstrap';

export interface IProps {
  repos: IRepo[],
  branches: IBranch[],
  onRepoSelect: (repo: IRepo) => void,
  selectedRepoId: number,
}
  
const ReposList: React.FC<IProps> = ({repos, branches, selectedRepoId, onRepoSelect}) => (
  <Table bordered>
    <tbody>
    {repos.map((repo) => {
      const currentRepoBranches = selectedRepoId === repo.id ? branches : [];

      return (
        <RepoItem 
          key={repo.id}
          repo={repo}
          branches={currentRepoBranches}
          onClick={onRepoSelect}
        />
      )
    })}
    </tbody>
  </Table>
);

export default ReposList;
