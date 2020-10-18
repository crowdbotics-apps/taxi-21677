import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps147974Navigator from '../features/Maps147974/navigator';
import Add-Item147973Navigator from '../features/Add-Item147973/navigator';
import Maps147969Navigator from '../features/Maps147969/navigator';
import UserProfile147965Navigator from '../features/UserProfile147965/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps147974: { screen: Maps147974Navigator },
Add-Item147973: { screen: Add-Item147973Navigator },
Maps147969: { screen: Maps147969Navigator },
UserProfile147965: { screen: UserProfile147965Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
