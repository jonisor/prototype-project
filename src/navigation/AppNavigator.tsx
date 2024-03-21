import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { ROUTES } from '../constants/routes'
import { FeedListScreen } from '../screens/feed/FeedListScreen'
import { AccountScreen } from '../screens/AccountScreen'
import { FeedScreen } from '../screens/feed/FeedScreen'
import { FeedStackParamList } from './NavigationTypes'

export const AppNavigator = () => {
    const FeedStack = createStackNavigator<FeedStackParamList>();

    const Feed = () => {
        return (
            <FeedStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <FeedStack.Screen name={ROUTES.SCREENS.FEED_LIST} component={FeedListScreen} />
                <FeedStack.Screen name={ROUTES.SCREENS.FEED_SINGLE} component={FeedScreen} />
            </FeedStack.Navigator>
        )
    }

    const AccountStack = createStackNavigator();

    const Account = () => {
        return (
            <AccountStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <AccountStack.Screen name={ROUTES.SCREENS.ACCOUNT_MAIN} component={AccountScreen} />
            </AccountStack.Navigator>
        )
    }

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name={ROUTES.SCREENS.FEED} component={Feed} />
            <Tab.Screen name={ROUTES.SCREENS.ACCOUNT} component={Account} />
        </Tab.Navigator>
    )
}