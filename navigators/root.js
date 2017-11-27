import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import WelcomeScreen from '../screens/welcome'
import AuthOptionsScreen from '../screens/authOptions';

const RootNavigator = StackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    AuthOptions: {
        screen: AuthOptionsScreen,
        navigationOptions: {
            header: null,
        }
    }
});

export default RootNavigator;