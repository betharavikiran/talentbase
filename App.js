import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';
import DrawerContent from './app/Navigation/DrawerContent';
import Toolbar from './app/Navigation/Toolbar';
import AppNavigation from './app/Navigation/AppNavigation';
import { NavigationActions } from 'react-navigation';
import { bgStatusBar, bgDrawer } from './app/global.styles';

const getDrawerWidth = () => Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);

export default class App extends Component {
  constructor() {
    super();

    this.drawer = React.createRef();
    this.navigator = React.createRef();
    this.state = {
      routeStack: ['LeaderBoard'],
    };
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  };

  stackHasRoute = route => this.state.routeStack.find(item => item === route);

  navigateToRoute = (routeName) => {
    if (routeName === this.state.routeStack[this.state.routeStack.length - 1]) {
      this.closeDrawer();
      return;
    }

    if (this.stackHasRoute(routeName)) {
      this.setState({
        routeStack: this.state.routeStack.slice(0, this.state.routeStack.indexOf(routeName))
            .concat([routeName]),
      });
      this.navigator.current && this.navigator.current.dispatch(
          NavigationActions.navigate({ routeName })
      );
      this.closeDrawer();
      return;
    }

    this.navigator.current && this.navigator.current.dispatch(
        NavigationActions.navigate({ routeName })
    ) && this.setState({
      routeStack: this.state.routeStack.concat([routeName]),
    }, () => this.closeDrawer());
  };

  goBack = () => {
    this.navigator.current && this.navigator.current.dispatch(
        NavigationActions.back()
    ) && this.setState({
      routeStack: this.state.routeStack.slice(0, this.state.routeStack.length - 1),
    });
  };

  render() {
    const { routeStack } = this.state;
    return (
        <DrawerLayoutAndroid
            drawerWidth={getDrawerWidth()}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={
              () => <DrawerContent
                  activeRouteName={routeStack[routeStack.length - 1]}
                  navigateTo={this.navigateToRoute} />
            }
            drawerBackgroundColor={bgDrawer}
            ref={this.drawer}
        >
          <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor={bgStatusBar}
                animated
            />
            <Toolbar
                showMenu={this.openDrawer}
                goBack={this.goBack}
                navigateTo={this.navigateToRoute}
                actualRouteName={routeStack[routeStack.length - 1]}
            />
            <AppNavigation ref={this.navigator} />
          </View>
        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
