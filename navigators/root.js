import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import WelcomeScreen from '../containers/welcome'
import AuthOptionsScreen from '../containers/authOptions';

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