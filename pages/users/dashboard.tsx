import React, { useContext } from "react";

import CurrentUser from "../../src/CurrentUserContext";

export default function Dashboard() {
  const currentUser = useContext(CurrentUser);
  return <div>{currentUser.email}</div>;
}

