import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import GetStartedScreen from '../components/getStarted'
import AuthOptionsScreen from '../containers/authOptions';
import WelcomeScreen from '../components/welcome';
import ResetPassword from '../containers/resetPassword';
import FavoriteInterestsScreen from '../containers/favoriteInterests';

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