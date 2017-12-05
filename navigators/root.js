import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import GetStartedScreen from '../components/get-started'
import AuthOptionsScreen from '../containers/auth-options';
import WelcomeScreen from '../components/welcome';
import ResetPassword from '../containers/reset-password';
import FavoriteInterestsScreen from '../containers/favorite-interests';

const RootNavigator = StackNavigator({
    GetStarted: {
        screen: GetStartedScreen,
        navigationOptions: {
            header: null,
        }
    },
    AuthOptions: {
        screen: AuthOptionsScreen,
        navigationOptions: {
            header: null,
        }
    },
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            header: null
        }
    },
    FavoriteInterests: {
        screen: FavoriteInterestsScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default RootNavigator;