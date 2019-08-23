import React, { useState } from 'react';
import Search from '../../ui/Search';
import RepoList from '../../ui/RepoList';
import { useDispatch, useSelector } from "react-redux";
import {AppState} from '../../../reducers/index';
import { loadRepos, resetRepos } from '../../../actions/repo';
import { loadBranches } from '../../../actions/branch';
import {IRepo} from 'types';
import {Row, Col} from 'react-bootstrap';

export const Repos: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [openRepoId, setOpenRepoId] = useState(0);
    const repos = useSelector(({repo}: AppState) => repo.list);
    const branches = useSelector(({branch}: AppState) => branch.list);
    const dispatch = useDispatch();

    const handleChange = (text: string) => {
        if(!searchText) {
            dispatch(resetRepos());
        }

        setSearchText(text);
    };

    const handleSubmit = () => {
        if (searchText) {
            dispatch(loadRepos(searchText));
        };
    };

    const handleLoadRepoBranches = async (repo: IRepo) => {
        const isCurrentRepoSelected = openRepoId === repo.id;

        if (isCurrentRepoSelected) {
            return setOpenRepoId(0);
        }

        await dispatch(loadBranches(repo.branches_url));
        setOpenRepoId(repo.id);
    };

    return (
        <div>
            <Row>
                <Col>
                    <Search 
                        value={searchText}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </Col>
            </Row>
            
            <Row>
                <Col>
            <RepoList
                repos={repos}
                branches={branches}
                selectedRepoId={openRepoId}
                onRepoSelect={handleLoadRepoBranches}
            />
             </Col>
            </Row>
        </div>
    );
};

export default Repos;
