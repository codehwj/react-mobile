import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import moment from 'moment'
import './index.scss'


class Recommend extends Component {
  static propTypes = {
    mktInfo: PropsTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div >
        {
          this.props.mktInfo.length &&
          <div className="recommend">
            <div className="main">
              {
                this.props.mktInfo.filter(item => item.msStartTime && item.nextStartTime).map((item, index) => (
                  <div className="item" key={index}>
                    <div className="img" style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                    <h4 className="title">{item.actTitle}</h4>
                    {/* <Countdown time={item.nextStartTime}></Countdown> */}
                    {/* <Countdown time={moment(item.nextStartTime).diff(moment(new Date(),"seconds"))}></Countdown> */}
                    <Countdown time={item.nextStartTime}></Countdown>
                    <div className="next">{item.nextStartTime}</div>

                  </div>
                ))
              }
            </div>
            <div className="minor">
              {
                this.props.mktInfo.filter(item => !item.msStartTime && !item.nextStartTime).map((item, index) => (
                  <div className="item" key={index}>
                    <div className="left">
                      <h4 className="title">{item.actTitle}</h4>
                      {
                        item.acRemark.length ?
                          <div className="remark">{item.acRemark}</div> : ""
                      }
                    </div>
                    <div className="img" style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                  </div>
                ))
              }
            </div>
          </div>
        }

      </div>
    )
  }
}

class Countdown extends Component {
  static propTypes = {
    time: PropsTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {}
  }

  getDateSpace() {
    let time = this.props.time;
    let formatStr = `YYYY-MM-DD HH:mm:ss`
    let currentTime = moment().format(formatStr);
    let duration = moment.duration(moment(time, formatStr).diff(currentTime));
    
    let actionSpaceTime = {
      // days: duration.get('days'),
      days: moment(time, formatStr).diff(currentTime, "days"),
      hours: `${duration.get('hours')}`.length === 1 ? `0${duration.get('hours')}` : duration.get('hours'),
      minutes: `${duration.get('minutes')}`.length === 1 ? `0${duration.get('minutes')}` : duration.get('minutes'),
      seconds: `${duration.get('seconds')}`.length === 1 ? `0${duration.get('seconds')}` : duration.get('seconds')
    }
    this.setState({
      actionSpaceTime: actionSpaceTime
    })
  }
  componentDidMount() {
    this.Interval = setInterval(() => {
      this.getDateSpace();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    return (
      <div>
        {
          this.state.actionSpaceTime && Object.keys(this.state.actionSpaceTime).length &&
          < div className="countDown">
            <span>{this.state.actionSpaceTime.days}</span>天
            <span>{this.state.actionSpaceTime.hours}</span>:
            <span>{this.state.actionSpaceTime.minutes}</span>:
            <span>{this.state.actionSpaceTime.seconds}</span>
          </div>
        }
      </div>
    )
  }
}

export default Recommend