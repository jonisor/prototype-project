import { Button, StyleSheet, View } from "react-native"
import {StackScreenProps} from '@react-navigation/stack'
import { baseColors } from "../../../theme"
import { HeaderComponent } from "../../components/HeaderComponent"
import { FeedStackParamList } from "../../navigation/NavigationTypes";
import { ROUTES } from "../../constants/routes"

type IProps = StackScreenProps<FeedStackParamList, 'FeedList'>

export const FeedListScreen = ({ navigation: {navigate}}: IProps) => {
    return (<View style={styles.container}>
        <HeaderComponent title='Feed list' />
        <Button title='To feed' onPress={()=> navigate(ROUTES.SCREENS.FEED_SINGLE)} />
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