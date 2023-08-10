// @flow 
import * as React from 'react';
import { Card } from '../UI/Card';
import classes from './UsersList.module.css';


export const UsersList = (props) => {
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user, idx) => (
            <li key={idx}>
              {user.userName} ({user.age}) years old
            </li>
          ))}
        </ul>
      </Card>
    );
};