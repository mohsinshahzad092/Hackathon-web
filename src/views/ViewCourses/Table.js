import React from 'react'
import "antd/dist/antd.css";
import { Table, Tag, Radio, Space } from 'antd';

const topOptions = [
  { label: 'topLeft', value: 'topLeft' },
  { label: 'topCenter', value: 'topCenter' },
  { label: 'topRight', value: 'topRight' },
  { label: 'none', value: 'none' },
];

const bottomOptions = [
  { label: 'bottomLeft', value: 'bottomLeft' },
  { label: 'bottomCenter', value: 'bottomCenter' },
  { label: 'bottomRight', value: 'bottomRight' },
  { label: 'none', value: 'none' },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'courseName',
    key: 'courseName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Course Outline',
    dataIndex: 'courseOutline',
    key: 'courseOutline',
  },
  {
    title: 'Course Duration',
    dataIndex: 'courseDuration',
    key: 'courseDuration',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    courseName: 'John Brown',
    courseOutline: 32,
    courseDuration: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    courseName: 'Jim Green',
    courseOutline: 42,
    courseDuration: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    courseName: 'Joe Black',
    courseOutline: 32,
    courseDuration: 'Sidney No. 1 Lake Park',
  },
];

class TableDesign extends React.Component {
  state = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };

  render() {
    return (
      <div>
        <Table
          columns={columns}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          dataSource={this.props.myData}
        />
      </div>
    );
  }
}

export default TableDesign;