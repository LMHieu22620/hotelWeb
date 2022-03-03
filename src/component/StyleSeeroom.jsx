import styled from "styled-components";
import defaultImg from "../assets/image/images/room-1.jpeg";
const StyleSeeroom = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  position: absolute;
  inset: 0;
  margin-top: 176px;
  height: 344px;
`;

export default StyleSeeroom;
