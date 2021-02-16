import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      id: "",
      name: "",
      emailId: "",
      aadharNumber: "",
      panNumber: "",
      employeeType: "",
      joiningDate: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      name: nextProps.name,
      emailId: nextProps.emailId,
      aadharNumber: nextProps.aadharNumber,
      panNumber: nextProps.panNumber,
      employeeType: nextProps.employeeType,
      joiningDate: nextProps.joiningDate,
    });
  }

  nameHandler(e) {
    this.setState({ name: e.target.value });
  }

  emailIdHandler(e) {
    this.setState({ emailId: e.target.value });
  }
  aadharNumberHandler(e) {
    this.setState({ aadharNumber: e.target.value });
  }
  panNumberHandler(e) {
    this.setState({ panNumber: e.target.value });
  }
  employeeTypeHandler(e) {
    this.setState({ employeeType: e.target.value });
  }
  joiningDateHandler(e) {
    this.setState({ joiningDate: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Employee Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                <span className="modal-lable">ID:</span>
                <br />
                <input value={this.state.id} />
              </p>
              <p>
                <span className="modal-lable">Name:</span>
                <br />
                <input
                  value={this.state.name}
                  onChange={(e) => this.nameHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">EmailID:</span>
                <br />
                <input
                  value={this.state.emailId}
                  onChange={(e) => this.emailIdHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Aadhar:</span>
                <br />
                <input
                  value={this.state.aadharNumber}
                  onChange={(e) => this.aadharNumberHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">PAN:</span>
                <br />
                <input
                  value={this.state.panNumber}
                  onChange={(e) => this.panNumberHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Employee Type:</span>
                <br />
                <input
                  value={this.state.employeeType}
                  onChange={(e) => this.employeeTypeHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Joining Date:</span>
                <br />
                <input
                  value={this.state.joiningDate}
                  onChange={(e) => this.joiningDateHandler(e)}
                />
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
