import React from 'react';
import './App.scss';


function App () {
  return (
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

        <div className="oneWeek">
          <span className="data">1</span>
          <span className="data">2</span>
          <span className="data">3</span>
          <span className="data">4</span>
          <span className="data">5</span>
          <span className="data">6</span>
          <span className="data">7</span>
        </div>
        <div className="twoWeek">
          <span className="data">8</span>
          <span className="data">9</span>
          <span className="data">10</span>
          <span className="data">11</span>
          <span className="data">12</span>
          <span className="data">13</span>
          <span className="data">14</span>
        </div>
        <div className="threeWeek">
          <span className="data">15</span>
          <span className="data">16</span>
          <span className="data">17</span>
          <span className="data">18</span>
          <span className="data">18</span>
          <span className="data">19</span>
          <span className="data">20</span>
        </div>
        <div className="fourWeek">
          <span className="data">21</span>
          <span className="data">22</span>
          <span className="data">23</span>
          <span className="data">24</span>
          <span className="data">25</span>
          <span className="data">26</span>
          <span className="data">27</span>
        </div>
        <div className="fiveWeek">
          <span className="data">28</span>
          <span className="data">29</span>
          <span className="data">30</span>
          <span className="data">31</span>
          <span className="data">1</span>
          <span className="data">2</span>
          <span className="data">3</span>
        </div>

      </div>

    </div>
  );
}

export default App;
