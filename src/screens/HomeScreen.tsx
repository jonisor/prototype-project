import { StyleSheet, View } from "react-native/types"
import { baseColors } from "../../theme"
import { HeaderComponent } from "../components/HeaderComponent"

export const HomeScreen = () => {
    return (<View style={styles.container}>
        <HeaderComponent title='Home' />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: baseColors.neutrals.white
    }
})