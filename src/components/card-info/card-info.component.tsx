import { icons } from "lucide-react";
import * as S from "./card-info.styles";

type Props = {
  label: string;
  info: string;
  icon: string;
};

export function CardInfo({ label, info, icon }: Props) {
  const IconComponent = icons[icon as keyof typeof icons];
  return (
    <S.Container>
      <S.LabelContainer>
        {IconComponent && <IconComponent opacity={0.7} size={14} />}
        <S.LabelItem>{label}</S.LabelItem>
      </S.LabelContainer>
      <S.InfoItem>{info}</S.InfoItem>
    </S.Container>
  );
}
