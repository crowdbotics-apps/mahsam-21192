import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings130861Navigator from '../features/Settings130861/navigator';
import UserProfile130859Navigator from '../features/UserProfile130859/navigator';
import Settings130837Navigator from '../features/Settings130837/navigator';
import UserProfile130830Navigator from '../features/UserProfile130830/navigator';
import Settings130829Navigator from '../features/Settings130829/navigator';
import Settings130827Navigator from '../features/Settings130827/navigator';
import SignIn2130825Navigator from '../features/SignIn2130825/navigator';
import Maps130806Navigator from '../features/Maps130806/navigator';
import Add-Item130805Navigator from '../features/Add-Item130805/navigator';
import Maps130801Navigator from '../features/Maps130801/navigator';
import UserProfile130797Navigator from '../features/UserProfile130797/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings130861: { screen: Settings130861Navigator },
UserProfile130859: { screen: UserProfile130859Navigator },
Settings130837: { screen: Settings130837Navigator },
UserProfile130830: { screen: UserProfile130830Navigator },
Settings130829: { screen: Settings130829Navigator },
Settings130827: { screen: Settings130827Navigator },
SignIn2130825: { screen: SignIn2130825Navigator },
Maps130806: { screen: Maps130806Navigator },
Add-Item130805: { screen: Add-Item130805Navigator },
Maps130801: { screen: Maps130801Navigator },
UserProfile130797: { screen: UserProfile130797Navigator },

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
