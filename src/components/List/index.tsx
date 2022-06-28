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
    const str = 'image_id' as String;
    // console.log(typeof props.data)
    posts.map((posts) => {
        if(props.data[posts] === undefined){
            return (
                console.log("Não tem imagem")
            )
        }
        return (

            <>
           { console.log(props.data[posts].image_id)}
            <Images src={"https://www.artic.edu/iiif/2" + props.data[posts]} wdt={200} hgt={200} />
            {console.log(posts)}
            </>
        )
    })
    return (
        <></>
    )
}