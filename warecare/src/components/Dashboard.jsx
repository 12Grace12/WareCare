import React from 'react';
import ReactDOM from 'react-dom';
import Head from "next/head";
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import CircleProgress from '../components/Donut'


export default function Dashboard({
    resourceTitle, organization, startDate, location, imageSrc, startTime, endTime,
  }) {
    return (
      <div className={styles.base}>
        
  
        <div className={styles.rightside}>
          <div className={styles.content}> 
            <h2>{resourceTitle} User's Connected Device:</h2>
            <h2>{resourceTitle} Network:</h2>
            <h3>Health Rating:</h3>
            <CircleProgress size={200} stroke={50} percentage={70} />
            <div id="app"></div>
            <p className={styles.subtitle}>{organization}</p>
            <p className={styles['icon-line']}>
             
              
            </p>
            <p className={styles['icon-line']}>
            
             
            </p>
            <p className={styles['icon-line']}>
            
              {location}
            </p>
          </div>
  
          <div className={styles.buttons}>
            <button className={styles.morebutton} type="button">More Info</button>
            <button className={styles.reportbutton}type="button">Report Issue</button>

          </div>
        </div>
      </div>
    );
  }
  
  Dashboard.propTypes = {
    resourceTitle: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date).isRequired,
    endTime: PropTypes.instanceOf(Date).isRequired,
  
  };