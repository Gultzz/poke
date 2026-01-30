import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 140px;
  border-radius: 16px;
`;

export const ContainerInfos = styled.div`
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-size: 21px;
  font-weight: 600;
`;

export const ContainerTypes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Type = styled.span`
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  gap: 4px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
`;

export const Number = styled.p`
  font-weight: 600;
  color: #333333;
  font-size: 12px;
`;

export const CardImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
