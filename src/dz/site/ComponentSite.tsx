import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";


export const ComponentSite = () => {
    return (
        <>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>

        </>
    )
}