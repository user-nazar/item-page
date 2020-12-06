import React, {useState} from "react";
import {
    ContainerCards,
    TitleStyles,
    ButtonStyles,
    CatalogContainer,
} from "../styles/HomeCatalogStyles";
import ContainerItem from "./ContainerItem";
import {data as source} from "./List";

const HomeCatalog = () => {
    const [data, setData] = useState(source.slice(0, 2));
    const [isShowMore, setIsShowMore] = useState(false);

    const showMore = () => {
        setData(source);
        setIsShowMore(true);
    };

    const showLess = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        });
        console.log(window);

        setData(source.slice(0, 2));
        setIsShowMore(false);
    };

    return (
        <CatalogContainer>
            <TitleStyles> Choose your player: </TitleStyles>
            <ContainerCards>
                <ContainerItem goods={data} currentView="card"/>
            </ContainerCards>
            {!isShowMore && (
                <ButtonStyles onClick={() => showMore()}>More option</ButtonStyles>
            )}
            {isShowMore && <ButtonStyles onClick={showLess}>More option</ButtonStyles>}
        </CatalogContainer>
    );
};

export default HomeCatalog;
