import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay:undefined
    };

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    this.setState = {
      selectedDay: day
    };
  }

  render() {
    return (<div>
      <DayPickerInput
         name="birthday"
         placeholder="DD/MM/YYYY"
         format="DD/MM/YYYY"
         onDayChange={this.handleDayChange}
      />
    </div>)
  }
}

export default Date;
