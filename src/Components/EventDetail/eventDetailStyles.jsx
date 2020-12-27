import styled from "styled-components";

export const EventDetailContainerTag = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RemainingTimeTagContainerTag = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
`;

export const TitleContainerTag = styled.div`
  height: 10%;
`;

export const DescriptionContainerTag = styled.div`
  height: 60%;
  overflow: scroll;
`;
export const DescriptionPTag = styled.p`
  font-size: 20px;
  word-wrap: break-word;
  width: 100%;
  height:100px;
`;