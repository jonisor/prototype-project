import React from "react"
import { StyleSheet, Text } from "react-native"
import { fontSizes } from "../../theme";

interface IProps {
    title: string;
};

export const HeaderComponent = ({title}: IProps): React.JSX.Element => {
    return (<Text style={styles.font}>{title}</Text>)
}

const styles = StyleSheet.create({
    font: {
        fontSize: fontSizes.headline2
    }
})