import React, {useState, useEffect, useRef} from "react";
import {
    BottomPart,
    ItemInfo,
    StyledItem,
    StyledPrice,
    TopPart,
    ButtonItemStyles,
    NameStyles,
    DescriptionStyles,

} from "../styles/ItemStyles";
import {data} from "./List";
import {useLocation, Redirect} from "react-router-dom";
import {Image} from "antd";
import description from "./UtilsInfo";

const Item = () => {
    const [item, setItem] = useState({});
    const [redirect, setRedirect] = useState(false);

    const location = useLocation();
    const totalPrice = useRef(null);


    useEffect(() => {
        window.scrollTo(0, 0);
        const id = parseInt(location.search.split("=")[1]);
        const foundItem = data.find((element) => element.id === id);
        setItem(foundItem);
        totalPrice.current = foundItem.priceInMlnEuro;
    }, []);


    return (
        <StyledItem>
            <TopPart>
                <Image src={item.image}/>
                <ItemInfo>
                    <NameStyles>{item.name}</NameStyles>
                    <DescriptionStyles>{description(item)}</DescriptionStyles>

                </ItemInfo>
            </TopPart>
            <BottomPart>
                <StyledPrice>Price: {totalPrice.current} ₴</StyledPrice>
                <ButtonItemStyles
                    onClick={() => setRedirect(true)}
                >
                    Return
                </ButtonItemStyles>
                {redirect && <Redirect push to="/catalog"/>}
                <ButtonItemStyles>
                    Add
                </ButtonItemStyles>
            </BottomPart>
        </StyledItem>
    );
};

export default Item;
