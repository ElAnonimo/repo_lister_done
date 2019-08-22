import React from 'react';
import {IRepo, IBranch} from 'types';
import styles from './index.module.css';
import BranchList from '../BranchList';
import { Button, Image } from 'react-bootstrap';

export interface IProps {
    repo: IRepo,
    branches: IBranch[],
    onClick: (repo: IRepo) => void,
  }

const RepoItem: React.FC<IProps> = ({repo, branches, onClick}) => (
    <React.Fragment>
        <tr>
            <td>
                <Button
                    variant="light"
                    onClick={onClick.bind(null, repo)}
                    block
                >{repo.name}</Button>
            </td>            
            <td>{repo.description}</td>
            <td align="center">
                <Image src={repo.owner.avatar_url} roundedCircle className={styles.avatar} />
            </td>
        </tr>
        {Boolean(branches.length) && (
            <tr>
                <td colSpan={3}>
                    <BranchList branches={branches}/>
                </td>
            </tr>
        )}
   </React.Fragment>
);
  
  export default RepoItem;