import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Calendar, DatePicker } from 'antd';
import { translate } from 'react-i18next';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export class General extends React.Component {
  state = {};

  onChange = () => {};

  render() {
    const { onChange } = this;
    const { t } = this.props;
    console.log(t);
    return (
      <div>
        <h1>{t('title')}</h1>
        <Calendar fullscreen={false} />
        <hr />
        <div>
          <DatePicker onChange={onChange} placeholder={t('date-picker.placeholder')} />
          <br />
          <MonthPicker onChange={onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={onChange} />
          <br />
          <WeekPicker onChange={onChange} placeholder="Select week" />
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
  translate('general'),
)(General);
