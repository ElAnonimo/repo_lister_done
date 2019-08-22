import React from 'react';
import {IBranch} from 'types';
import {ListGroup} from 'react-bootstrap';
  
export interface IProps {
    branches: IBranch[],
}
  
const BranchList: React.FC<IProps> = ({branches}) => (
  <ListGroup>
    {branches.map(({name}) => (
      <ListGroup.Item key={name}>
        {name}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default BranchList;
