import React, { useState } from "react";

export default function Select({ changeNotes, notes }) {
  return (
    <select
      value={notes}
      className={"tic-tac-chat-select"}
      onChange={changeNotes}
    >
      <option value=" ">Select release notes version.</option>
      <option value="notesv1.1.1">Version 1.1.1</option>
      <option value="notesv1.0.0">Version 1.0.0</option>
    </select>
  );
}
