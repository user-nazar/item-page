import React from "react";
import {EntityContainer} from "../styles/ContainerItemStyles";
import Card from "./Card";
import {Flipper, Flipped} from "react-flip-toolkit";

const ContainerItem = ({products}) => {
    return (
        <Flipper flipKey={products}>
            <EntityContainer>
                {products.map((player) => {
                    return (
                        <Flipped key={player.id} flipId={player.id}>
                            <div>
                                <Card player ={player}/>
                            </div>
                        </Flipped>
                    );

                })
                }
            </EntityContainer>
        </Flipper>
    );
};

export default ContainerItem;
