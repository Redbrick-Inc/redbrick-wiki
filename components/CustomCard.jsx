import React from "react";
import { Cards } from "nextra/components";

// 지난 기수 작품 보기 페이지에 사용될 이미지 Card 컴포넌트 작성 예정
const ImageCard = ({ image, title, description, link }) => {
    return (
      <Cards.Card href={link} target="_blank">
        <div style={{ position: "relative", overflow: "hidden" }}>
            <img
                src={image}
                alt={title}
                style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                }}
            />
        </div>
        <div style={{ padding: "16px" }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{title}</h3>
            <p style={{ margin: "0", fontSize: "14px", color: "#777" }}>{description}</p>
        </div>
      </Cards.Card>
    );
};

export { ImageCard };