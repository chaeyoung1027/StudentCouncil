import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function SchoolEvent(props) {

    const history = useHistory();

    function handler2() {
        history.replace("/club");
        window.location.reload();
    }
  return (
    <>
    <div onClick={handler2}>
        안ㄴ여핫에ㅕ
    </div>
    </>
  );
}

export default SchoolEvent;
