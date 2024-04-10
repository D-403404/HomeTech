import React from "react";
// import { useNavigate } from 'react-router-dom'

export default function Table({ headers, data }) {
  return (
    <div className="table-container">
      <table className="table table-fixed">
        <thead className="table-header">
          <tr className="">
            {headers.map((header, headerIndex) => (
              <th key={headerIndex} width={header[1]} className="p-0">
                <th key={headerIndex} className="table-header-cell">
                  {header[0]}
                </th>
                <div className="h-0 min-w-full border-b-[1px] border-bordercolor shadow-[0_4px_6px_0_rgba(0,0,0,0.53)]"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex === data.length - 1
                  ? "table-row-no-border"
                  : "table-row"
              }`}
            >
              <td className="table-cell">HomeTech.{row.device}</td>
              <td className="table-cell">
                {row.timestamp.getDate().toString().padStart(2, "0")}/
                {row.timestamp.getMonth().toString().padStart(2, "0")}/
                {row.timestamp.getFullYear().toString().padStart(2, "0")}{" "}
                {row.timestamp.getHours().toString().padStart(2, "0")}:
                {row.timestamp.getMinutes().toString().padStart(2, "0")}:
                {row.timestamp.getSeconds().toString().padStart(2, "0")}
              </td>
              <td className="table-cell">{row.type}</td>
              <td className="table-cell">
                {row.value}
                {row.type === "Light intensity"
                  ? " lx"
                  : row.type === "Humidity"
                  ? "%"
                  : row.type === "Temperature"
                  ? "°C"
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
