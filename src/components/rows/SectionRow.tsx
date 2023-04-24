import React from "react"
import styled from "styled-components"

function SectionRow() {
  return <Wrapper></Wrapper>
}

export default SectionRow

const Wrapper = styled.div`
  max-width: 370px;
  padding: 10px;
  background: rgba(68, 66, 178, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
  border-radius: 10px;
`
