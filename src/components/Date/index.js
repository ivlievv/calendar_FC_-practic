import React from 'react';
import styles from './Date.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const EventItem = props =>{
  const {event: {isIn}} = props;
  return <li className={classNames(styles.event, {[styles.isEvent]: isIn})}/>

};

EventItem.prototype = {
  event:PropTypes.shape({
    isIn: PropTypes.bool.isRequired,
                        })
};

const Date = (props) => {
  return <div>{

  }
  <ul className="container">
    <EventItem/>
    <EventItem/>
    <EventItem/>
  </ul>
  </div>

};

export default Date;