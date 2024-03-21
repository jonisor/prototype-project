import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { ROUTES } from '../constants/routes'
import { FeedScreen } from '../screens/FeedScreen'
import { AccountScreen } from '../screens/AccountScreen'

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name={ROUTES.SCREENS.FEED} component={FeedScreen} />
            <Tab.Screen name={ROUTES.SCREENS.ACCOUNT} component={AccountScreen} />
        </Tab.Navigator>
    )
}