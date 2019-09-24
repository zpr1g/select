/* eslint no-console: 0 */
import React from 'react';
import Select, { Option } from '../src';
import '../assets/index.less';

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i} test={i}>
      {i.toString(36) + i}
    </Option>,
  );
}

class Test extends React.Component {
  state = {
    value: ['name2', 'name3'],
  };

  onChange = (value, option) => {
    console.log(`changed ${value}`, option);
    this.setState({
      value,
    });
  };

  onSelect = (value, option) => {
    console.log(`selected ${value}`, option.props);
  };

  onDeselect = (value, option) => {
    console.log(`deselected ${value}`, option);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h2>custom dropdown render select</h2>
        <div>
          <Select
            placeholder="placeholder"
            dropdownMenuStyle={{ maxHeight: 200 }}
            style={{ width: 500 }}
            value={value}
            showSearch={false}
            onChange={this.onChange}
            onSelect={this.onSelect}
            onDeselect={this.onDeselect}
            onFocus={() => console.log('focus')}
            onBlur={() => console.log('blur')}
            dropdownRender={menu => (
              <React.Fragment>
                <div>
                  BEFORE <input />
                </div>
                {menu}
                <div>
                  AFTER{' '}
                  <button type="button" onClick={() => console.log('click button')}>
                    button
                  </button>
                </div>
              </React.Fragment>
            )}
          >
            {children}
          </Select>
        </div>
      </div>
    );
  }
}

export default Test;
