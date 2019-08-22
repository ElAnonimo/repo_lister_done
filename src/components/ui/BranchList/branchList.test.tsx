import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BranchList from '.';
Enzyme.configure({ adapter: new Adapter() });

it('should run without failure with empty params', () => {
    const branches = Enzyme.shallow(
        <BranchList branches={[]} />
    );

    expect(branches.find('ListGroup').children()).toHaveLength(0);
});

it('should put branches two params', () => {
    const data = [{name: 'master'}, {name: '1.2.2'}]
    const branches = Enzyme.shallow(
        <BranchList branches={data} />
    );

    expect(branches.find('ListGroup').children()).toHaveLength(2);
});