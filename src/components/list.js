import React, { Component } from "react";
import Modal from "./modal.js";

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      data: [
        {
          id: 1,
          name: "John",
          emailId: "john@companyname.com",
          aadharNumber: "3653782476",
          panNumber: "R05HKI2BHY",
          employeeType: "Full-Time",
          joiningDate: "18-02-2019",
        },
        {
          id: 2,
          name: "Gulnar",
          emailId: "gulnar@companyname.com",
          aadharNumber: "5864636979",
          panNumber: "JU3XUBVXFI",
          employeeType: "Part-Time",
          joiningDate: "09-04-2019",
        },
        {
          id: 3,
          name: "Maxene",
          emailId: "maxene@companyname.com",
          aadharNumber: "4439662981",
          panNumber: "ZSIW4XGXWX",
          employeeType: "Part-Time",
          joiningDate: "04-06-2019",
        },
        {
          id: 4,
          name: "Joanna",
          emailId: "joanna@companyname.com",
          aadharNumber: "8992106113",
          panNumber: "TRQ5GOSEKQ",
          employeeType: "Full-Time",
          joiningDate: "10-11-2019",
        },
      ],
    };
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index,
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempdata = this.state.data;
    tempdata[requiredItem] = item;
    this.setState({ data: tempdata });
  }

  deleteItem(index) {
    let tempData = this.state.data;
    tempData.splice(index, 1);
    this.setState({ data: tempData });
  }

  render() {
    const data = this.state.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.emailId}</td>
          <td>{item.aadharNumber}</td>
          <td>{item.panNumber}</td>
          <td>{item.employeeType}</td>
          <td>{item.joiningDate}</td>
          <td>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}
            >
              edit
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => this.deleteItem(index)}
            >
              remove
            </button>
          </td>
        </tr>
      );
    });

    const requiredItem = this.state.requiredItem;
    let modalData = this.state.data[requiredItem];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Editable Employee Details</h1>
        </div>
        <table className="table table-striped">
          <tbody>{data}</tbody>
        </table>
        <Modal
          id={modalData.id}
          name={modalData.name}
          emailId={modalData.emailId}
          aadharNumber={modalData.aadharNumber}
          panNumber={modalData.panNumber}
          employeeType={modalData.employeeType}
          joiningDate={modalData.joiningDate}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;
