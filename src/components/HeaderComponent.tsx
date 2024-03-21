import React from "react"
import { Text } from "react-native"

interface IProps {
    title: string;
};

export const HeaderComponent = ({title}: IProps): React.JSX.Element => {
    return (<Text>{title}</Text>)
}