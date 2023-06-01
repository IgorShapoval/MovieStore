import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Item = styled.li`
  border-radius: 10px;
  border: 3px solid #e6e6e6;
  line-height: 22px;
  margin-left: auto;
  padding: 5px 13px 5px 15px;
  position: relative;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-style: italic;
`;

export const Data = styled.div`
  color: #919191;
`;

export const Styled = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;
