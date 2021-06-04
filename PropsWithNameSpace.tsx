import type {ReactNode} from "react";
import {memo} from "react";

export type MyComponentProps =
    MyComponentProps.WithIcon |
    MyComponentProps.WithoutIcon
    ;

export declare namespace MyComponentProps {

    type Common = {
        className?: string;
        children: ReactNode;
    };

    type WithIcon = Common & {
        hasIcon: true;
        iconType: "home" | "back",
        iconColor: "red" | "blue",
        iconSize: "little" | "small"
    }

    type WithoutIcon = Common & {
        hasIcon: false;
    };

}


const props: MyComponentProps = {
    "children": null,
    "iconSize": "small",
    "iconType": "back",
    "iconColor": "blue",
    "hasIcon": true
}

const props2: MyComponentProps = {
    "hasIcon": false,
    "children": null
}


export const MyComponent = memo((props: MyComponentProps) => {
    if(props.hasIcon){
        console.log(props.iconColor)
    }else{
        console.log(props.hasIcon);
    }




    return <></>


});