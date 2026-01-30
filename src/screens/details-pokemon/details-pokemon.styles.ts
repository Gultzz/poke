import styled from "styled-components";

export const ContainerScreen = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 100dvw;
  flex-direction: column;
`;

export const BackgroundHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 140dvw;
  margin-top: -100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
`;

export const ImageHero = styled.img`
  position: absolute;
  width: 130px;
  bottom: 0;
  transform: translateY(35%);
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Number = styled.h1`
  font-size: 16px;
  opacity: 0.7;
  font-weight: 500;
`;

export const ContainerInfos = styled.div`
  padding: 16px;
  margin-top: 80px;
  width: 100%;
`;

export const ContainerTypes = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  gap: 8px;
`;

export const Type = styled.span`
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  gap: 4px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  line-height: 145%;
`;

export const ContainerListInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
`;

export const ContainerGender = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;
`;

export const GenderTitle = styled.p`
  font-size: 12px;
  letter-spacing: 0.5px;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: 500;
`;

export const ContainerProgress = styled.div`
  display: flex;
  margin-top: 7px;
  width: 100%;
  gap: 4px;
  flex-direction: column;
`;

export const Progress = styled.div`
  width: 100%;
  display: flex;
  background-color: #cccccc;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
`;

export const ProgressItem = styled.div`
  height: 100%;
  background-color: #f00;
`;

export const DetailsProgress = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DetailProgressItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  opacity: 0.6;
`;

export const DetailTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
