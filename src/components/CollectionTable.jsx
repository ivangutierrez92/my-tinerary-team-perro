import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function CollectionTable({editRoute, deleteOnClick, title, collection}) {
  return (
    <div className="MyCollection-tableContainer">
      <table className="MyCollection-table">
        <thead>
          <tr>
            <th>{title}</th>
            <th className="MyCollection-columnButton"></th>
            <th className="MyCollection-columnButton"></th>
          </tr>
        </thead>
        <tbody>
          {collection.map(document => {
            return (
              <tr>
                <td>{document.name}</td>
                <td className="MyCollection-buttonContainer">
                  <button
                    className="MyCollection-deleteButton"
                    onClick={() => deleteOnClick(document._id, document.name)}
                  >
                    <img src="/img/bx-trash.svg" alt="delete" />
                  </button>
                </td>
                <td className="MyCollection-buttonContainer">
                  <LinkRouter to={editRoute + document._id}>
                    <button className="MyCollection-editButton">
                      <img src="/img/bx-edit.svg" alt="edit" />
                    </button>
                  </LinkRouter>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
