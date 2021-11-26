/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./CurrentTrip.css";
import { Table } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

function CurrentTrip() {
  const { id } = useLocation().state;
  const [data, setData] = useState();

  const socket = io("http://localhost:8000", { transports: ["websocket"] });
  socket.on("notify-user", (value)=> {
      
  })

  const fetchTrip = async () => {
    let response = await axios.get(`http://localhost:8000/trips/${id}`);
    response = response.data;
    setData(response);
  };


  useEffect(() => {
    fetchTrip();
    socket.on("connect", () => {
      socket.emit("end-trip-request", { message: "End Trip", id });
    });
  }, [data]);

  return (
    <div className="masterContainer">
      <div className="my-header">
        <header>
          <h1>Current Trip</h1>
        </header>
      </div>
      <div className="contactMasterDiv">
        {data ? (
          <Table definition className="Contact-Form">
            <Table.Body>
              <Table.Row>
                <Table.Cell>User</Table.Cell>
                <Table.Cell>{data.user || ""}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Mover</Table.Cell>
                <Table.Cell>{data.mover || ""}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Bill</Table.Cell>
                <Table.Cell>{data.bill || ""}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Distance</Table.Cell>
                <Table.Cell>{data.totalDistance || ""}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Hours</Table.Cell>
                <Table.Cell>{data.totalHours || ""}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        ) : (
          <p>No Active Trip</p>
        )}
      </div>
    </div>
  );
}

export default CurrentTrip;
