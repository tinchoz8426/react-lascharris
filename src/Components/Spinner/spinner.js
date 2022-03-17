import { css } from "@emotion/react";
import BeatLoader from "react-spinners/ClipLoader";

const Spinner = () => {

  const override = css`
  display: block;
  margin: 2rem auto;
  border-color: #36D7B7;
`;

  return(
    <BeatLoader css={override}  />
  )


  }

export default Spinner