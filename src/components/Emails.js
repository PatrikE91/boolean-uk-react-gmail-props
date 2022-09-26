import Email from "./Email";
import Content from "./Content";
import { useState } from "react";

const Emails = (props) => {
  const [showBody, setShowBody] = useState(false);
  if (showBody) {
    return Content(props.email);
  } else {
    return (
      <ul>
        {props.emails.map((email) => (
          <Email
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
            setShowBody={setShowBody}
            showBody={showBody}
          />
        ))}
      </ul>
    );
  }
};

export default Emails;
