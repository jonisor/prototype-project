import { StyleSheet, View } from "react-native"
import { baseColors } from "../../theme"
import { HeaderComponent } from "../components/HeaderComponent"

export const AccountScreen = () => {
    return (<View style={styles.container}>
        <HeaderComponent title='Account' />
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