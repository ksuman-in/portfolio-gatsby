import React, { Component } from 'react'
import './Calendar.scss'
import moment from 'moment'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateObject: moment(),
      allMonths: moment.months(),
      isShowMonth: false,
    }
  }

  firstDayOfMonth = () => {
    const { dateObject } = this.state
    let fisrtDay = moment(dateObject).startOf('month').format('d')
    return fisrtDay
  }

  lastDayOfMonth = () => {
    const { dateObject } = this.state
    let lastDay = moment(dateObject).endOf('month').format('d')
    return lastDay
  }

  lastMonthLastDate = () => {
    const { dateObject } = this.state
    let lastDate = moment(dateObject)
      .subtract(1, 'months')
      .endOf('month')
      .format('DD')
    return lastDate
  }

  currentMonthLastDate = () => {
    const { dateObject } = this.state
    let lastDate = moment(dateObject).endOf('month').format('DD')
    return lastDate
  }

  prevDateInMonth = () => {
    let prevMonth = []
    for (let d = this.firstDayOfMonth() - 1; d >= 0; d--) {
      prevMonth.push(' ')
    }
    return prevMonth
  }

  currentDateInMonth = () => {
    let dayInMonth = []
    for (let d = 1; d <= this.currentMonthLastDate(); d++) {
      dayInMonth.push(d)
    }

    return dayInMonth
  }

  todayInfo = () => {
    const date = this.state.dateObject
    const dateInfo = {
      day: date.startOf('day').format('dddd'),
      date: date.startOf('date').format('DD'),
      month: date.startOf('month').format('MMMM'),
    }
    return dateInfo
  }

  currentMonth = () => {
    return this.state.dateObject.format('MMMM')
  }

  setMonth = month => {
    const { allMonths } = this.state
    let monthNo = allMonths.indexOf(month)
    let dateObject = Object.assign({}, this.state.dateObject)
    dateObject = moment(dateObject).set('month', monthNo)
    this.setState({
      dateObject: dateObject,
      isShowMonth: false,
    })
  }

  showMonths = () => {
    this.setState(prevState => ({ isShowMonth: !prevState.isShowMonth }))
  }

  render() {
    const { dateObject, allMonths, isShowMonth } = this.state
    const weekdaysShort = moment.weekdaysShort()
    const todayDetails = this.todayInfo()
    const currentDate = dateObject.format('D')
    return (
      <div className="calendar">
        <div className="col calendar__main">
          <div className="calendar__main--header">
            <div className="header__center" onClick={() => this.showMonths()}>
              {this.currentMonth()}
            </div>
            {isShowMonth && (
              <div className="months">
                {allMonths.map((item, index) => (
                  <button key={index} onClick={() => this.setMonth(item)}>
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="days">
            {weekdaysShort.map((item, index) => {
              return (
                <p className="day" key={index}>
                  {item}
                </p>
              )
            })}
          </div>
          <div className="dates">
            {this.prevDateInMonth().map((item, index) => (
              <button className="date date-prev" key={index}>
                {item}
              </button>
            ))}
            {this.currentDateInMonth().map((item, index) => (
              <button
                className={`date date-current ${
                  parseInt(currentDate) == item ? 'date-active' : ''
                }`}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="col calendar__today">
          <div className="day">
            <span>{todayDetails.day}</span>
          </div>
          <div className="date">
            <span>{todayDetails.date}</span>
          </div>
          <div className="month">
            <span>{todayDetails.month}</span>
          </div>
        </div>
      </div>
    )
  }
}
