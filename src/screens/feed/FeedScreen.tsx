import { StyleSheet, View } from "react-native"
import { baseColors } from "../../../theme"
import { HeaderComponent } from "../../components/HeaderComponent"

export const FeedScreen = () => {
    return (<View style={styles.container}>
        <HeaderComponent title='Feed' />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: baseColors.neutrals.white
    }
})