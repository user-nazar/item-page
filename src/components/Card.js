import React, {useState} from "react";
import {
    Footer,
    CardStyles,
    ButtonStyles,
    CardImage,
    MetaStyles,
    TextStyles,
    MoreInfo,
    ButtonLessStyles,
} from "../styles/CardStyles";
import {useHistory} from "react-router-dom";
import description from "./UtilsInfo";

const Card = ({player}) => {
    return (
        <div>
            <CardStyles
                hoverable
                cover={<CardImage alt="Player" src={player.image}/>}
            >
                <Footer>
                    <MetaStyles title={player.name}/>
                    <TextStyles>Price: {player.priceInMlnEuro} ₴</TextStyles>
                    <AllInfo player={player}/>
                </Footer>
            </CardStyles>
        </div>
    );
};

export default Card;

const AllInfo = ({player}) => {
    const [visible, setVisible] = useState(false);

    let history = useHistory();

    return (
        <div>
            <ButtonStyles onClick={() => setVisible(true)}>View More</ButtonStyles>
            <MoreInfo height={visible}>
                <MetaStyles description={description(player)}/>
                <ButtonStyles
                    onClick={() => {
                        history.push(`/item?id=${player.id}`);
                    }}
                >
                    Open
                </ButtonStyles>
                <ButtonLessStyles
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    View Less
                </ButtonLessStyles>
            </MoreInfo>
        </div>
    );
};
