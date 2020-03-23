import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OfflineNotice from './helpers/OfflineNotice';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

//screen list
import SplashScreen from './pages/SplashScreen';
import OnBoardingScreen from './pages/OnBoardingScreen';
import DashboardScreen from './pages/DashboardScreen';
import QuranListScreen from './pages/QuranListScreen';
import SearchSurahScreen from './pages/SearchSurahScreen';
import RecordScreen from './pages/RecordScreen';

const IsSecure = (WrappedComponent) => {
    return class ComponentHelper extends Component {
        render() {
            return (
                <View style={{ flex: 1 }}>
                    <WrappedComponent {...this.props} />
                </View>
            );
        }
    }
}

const StackNavigator = createStackNavigator({
    SplashScreen: {
        screen: IsSecure(SplashScreen),
        navigationOptions: {
            headerShown: false
        }
    },
    OnBoardingScreen: {
        screen: IsSecure(OnBoardingScreen),
        navigationOptions: {
            headerShown: false
        }
    },
    DashboardScreen: {
        screen: IsSecure(DashboardScreen),
        navigationOptions: {
            headerShown: false
        }
    },
    QuranListScreen: {
        screen: IsSecure(QuranListScreen),
        navigationOptions: {
            headerShown: false
        }
    },
    SearchSurahScreen: {
        screen: IsSecure(SearchSurahScreen),
        navigationOptions: {
            headerShown: false
        }
    },
    RecordScreen: {
        screen: IsSecure(RecordScreen),
        navigationOptions: {
            headerShown: false
        }
    }
});

const App = createAppContainer(StackNavigator);

class RootStack extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Provider store={store}>
                    <PersistGate store={store} persistor={persistor}>
                        <StatusBar barStyle="light-content" backgroundColor="#EAC153" />
                        <App />
                        <OfflineNotice />
                    </PersistGate>
                </Provider>
            </SafeAreaView>
        )
    }
}
export default RootStack;
