import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const LabelItem = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.6;
`;

export const InfoItem = styled.p`
  padding: 8px;
  gap: 8px;
  border-radius: 16px;
  text-transform: capitalize;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
