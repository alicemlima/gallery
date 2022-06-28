import _ from "lodash";
import { values } from "lodash";
import React from "react";
import Images from "../Images";

interface listProps {
    data: Array<any>;
    perPage: number;
}

export default function List(props: listProps) {
    const posts = _.range(props.perPage);
    return (
        <>
            {
            posts.map((posts) => {
                if(props.data[posts] === undefined || props.data[posts].image_id === null) {
                    return (
                        console.log("Não tem imagem")
                    )
                }
                return (
                    <>
                    <Images src={"https://www.artic.edu/iiif/2/" + props.data[posts].image_id + "/full/200,/0/default.jpg"} />
                    </>
                )
            })
            }
        </>
    )
}