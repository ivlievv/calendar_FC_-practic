import React from 'react';
import './App.css';
import EventItem from './components/Date';
import { mdiChevronDown } from '@mdi/js';

function App() {
return(
  <div className="container">
    <div className="header">
      <h1 className="calendar">Calendar</h1>
    </div>
        <div className="calendarNav">
          <h3 className="dateNav">May</h3>
          <h3 className="btnMonth">June</h3>
          <h3 className="dateNav">Jul</h3>
        </div>
      <div className="weekContainer">
        <h3>S</h3>
        <h3>M</h3>
        <h3>T</h3>
        <h3>W</h3>
        <h3>T</h3>
        <h3>F</h3>
        <h3>S</h3>
      </div>
      <div className="calendarContainer">

        <h3 className="data">1</h3>
        <h3 className="data">2</h3>
        <h3 className="data">3</h3>
        <h3 className="data">4</h3>
        <h3 className="data">5</h3>
        <h3 className="data">6</h3>
        <h3 className="data">7</h3>
        <h3 className="data">8</h3>
        <h3 className="data">9</h3>
        <h3 className="data">10</h3>
        <h3 className="data">11</h3>
        <h3 className="data">12</h3>
        <h3 className="data">13</h3>
        <h3 className="data">14</h3>
        <h3 className="data">15</h3>
        <h3 className="data">16</h3>
        <h3 className="data">17</h3>
        <h3 className="data">18</h3>
        <h3 className="data">20</h3>
        <h3 className="data">21</h3>
        <h3 className="data">22</h3>
        <h3 className="data">23</h3>
        <h3 className="data">24</h3>
        <h3 className="data">25</h3>
        <h3 className="data">26</h3>
        <h3 className="data">27</h3>
        <h3 className="data">28</h3>
        <h3 className="data">29</h3>
        <h3 className="data">30</h3>
        <h3 className="data">31</h3>
      </div>

  </div>
)
}

export default App;
