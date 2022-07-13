import React from "react";
import Paragraph from "../Paragraph";

export default function EndmarkParagraph({ children }) {
  return (
    <div className="inq-p-endmark">
      <Paragraph>{ children }</Paragraph>
    </div>
  );
}
