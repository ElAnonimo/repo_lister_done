import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RepoItem from '../RepoItem';
Enzyme.configure({ adapter: new Adapter() });

it('should run without failure with empty params', () => {
    const repo = { 
        id: 1,
        name: '',
        description: '',
        branches_url: '',
        owner: {
            avatar_url: ''
        }
    };
    const repoItem = Enzyme.shallow(
        <RepoItem repo={repo} branches={[]} onClick={()=> {}}/>
    );

    expect(repoItem.find('tbody').children()).toHaveLength(0);
});

it('should call onClick collback on button click', () => {
    const repo = { 
        id: 2,
        name: '',
        description: '',
        branches_url: '1234567890',
        owner: {
            avatar_url: ''
        }
    };

    const mockOnClick = jest.fn();
    const repoItem = Enzyme.shallow(
        <RepoItem repo={repo} branches={[]} onClick={mockOnClick}/>
    );

    const input = repoItem.find('Button');
    input.simulate('click');

    expect(mockOnClick.mock.calls[0][0]).toEqual(repo);
    expect(mockOnClick.mock.calls.length).toBe(1);
});