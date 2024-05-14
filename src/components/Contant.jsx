import React from "react";
import "../styles/content.css";
function Contant() {
  const data = [
    {
      id: 1,
      SrNo: 1,
      ARNumber: "ARDA2904001",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 2,
      SrNo: 2,
      ARNumber: "ARDA2904002",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Rejected",
      buttonColor: "#ff0000",
    },
    {
      id: 3,
      SrNo: 3,
      ARNumber: "ARDA2904003",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Working",
      buttonColor: "#FFA500",
    },
    {
      id: 4,
      SrNo: 4,
      ARNumber: "ARDA2904004",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Revision",
      buttonColor: "#90EE90",
    },
    {
      id: 5,
      SrNo: 5,
      ARNumber: "ARDA2904005",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 6,
      SrNo: 6,
      ARNumber: "ARDA2904006",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 7,
      SrNo: 7,
      ARNumber: "ARDA2904007",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 8,
      SrNo: 8,
      ARNumber: "ARDA2904008",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 9,
      SrNo: 9,
      ARNumber: "ARDA2904009",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 10,
      SrNo: 10,
      ARNumber: "ARDA29040010",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },
    {
      id: 11,
      SrNo: 11,
      ARNumber: "ARDA29040011",
      ItemName: "Drug name",
      ReceiveFrom: "simploona",
      ReceiveData: "29/04/2024",
      AssignUser: "Nirav",
      Status: "",
      buttonName: "Done",
      buttonColor: "#008000",
    },

    // Add more data as needed
  ];

  return (
    <>
      <div className="content-container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>AR Number</th>
                <th>Item Name</th>
                <th>Receive From</th>
                <th>Receive Data</th>
                <th>Assign User</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.SrNo}</td>
                  <td>{row.ARNumber}</td>
                  <td>{row.ItemName}</td>
                  <td>{row.ReceiveFrom}</td>
                  <td>{row.ReceiveData}</td>
                  <td>{row.AssignUser}</td>
                  <td>
                    {" "}
                    <button
                      style={{
                        backgroundColor: row.buttonColor,
                      }}
                    >
                      {row.buttonName}
                    </button>
                  </td>
                  <td>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </td>
                  <td>
                    <i class="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Contant;
