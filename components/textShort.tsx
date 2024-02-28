import { COLORS } from "@/constants/constants";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Edit from "@/components/icons/common/Edit";
import { DataObject } from "@/types/demo";

interface PropsType {
  dataKey: string;
  metaData: DataObject;
  metadataHandler: (data: DataObject) => void;
  maxLength?: number;
  title: string;
  placeholder?: string;
}

const UploadTextShort = ({
  dataKey,
  metaData,
  metadataHandler,
  maxLength,
  title,
  placeholder = "여기에 작성해주세요.",
}: PropsType) => {
  const onChangeValue = useCallback(
    (value: string) => {
      const temp: DataObject = {};
      temp[dataKey] = value;
      metadataHandler(temp);
    },
    [dataKey, metadataHandler]
  );

  return (
    <Container>
      <TitleArea>
        <IconContainer>
          <Edit size={24} fill="white" color="none" />
        </IconContainer>
        {`${title}`}
      </TitleArea>
      <InputArea>
        <TextInput
          type="text"
          maxLength={maxLength ?? 1000}
          placeholder={placeholder}
          value={metaData?.[dataKey] ?? ""}
          onChange={(e) => onChangeValue(e.target.value)}
        />
        {maxLength && (
          <div className="count">{`${
            metaData?.[dataKey]?.length ?? 0
          }/${maxLength}`}</div>
        )}
      </InputArea>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const TitleArea = styled.div`
  width: fit-content;
  gap: 16px;
  font-size: 17px;
  font-weight: 500;
  color: ${COLORS.font1};

  @media only screen and (max-width: 768px) {
    /* font-size: 14px; */
    gap: 12px;
  }
`;

const IconContainer = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: ${COLORS.orange2};
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const InputArea = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding-left: 26px;
  background-color: ${COLORS.gray05};
  border-radius: 20px;
  & .count {
    position: absolute;
    right: 26px;
    bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    color: ${COLORS.font3};
  }

  @media only screen and (max-width: 768px) {
    border-radius: 15px;
    padding-left: 20px;

    & .count {
      font-size: 12px;
      right: 20px;
      bottom: 20px;
    }
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.font1};
  line-height: 140%;
  vertical-align: start;
  background-color: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: ${COLORS.font3};
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export default UploadTextShort;
