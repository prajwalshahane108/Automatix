import React from "react";
import Joinfaq from "../../components/joinFAQ";
import Join from "../../pages/join/page";
import JoinFooter from "../../components/JoinFooter";
function page() {
  return (
    <div>
      <Join />
      <Joinfaq />
      <JoinFooter />
    </div>
  );
}

export default page;
