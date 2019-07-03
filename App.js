import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import ClansScreen from "./src/screens/Clans";
import PlayersScreen from "./src/screens/Players";
import CardsScreen from "./src/screens/Cards";
import TournamentsScreen from "./src/screens/Tournaments";
import LocationsScreen from "./src/screens/Locations";

import SideDrawer from "./src/screens/SideDrawer";
import configureStore from "./src/store/configureStore";

const store = configureStore();

//Register Screens
Navigation.registerComponent(
  "awesome-places.ClansScreen",
  () => ClansScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "awesome-places.PlayersScreen",
  () => PlayersScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.CardsScreen",
  () => CardsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.TournamentsScreen",
  () => TournamentsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.LocationsScreen",
  () => LocationsScreen,
  store,
  Provider
);

Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

//Start a App
const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-home" : "ios-home", 30),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-contact" : "ios-contact",
      30
    ),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-albums" : "ios-albums",
      30
    ),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-people" : "ios-people",
      30
    ),
    Icon.getImageSource(Platform.OS === "android" ? "md-pin" : "ios-pin", 30),

    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.ClansScreen",
          label: "Clans",
          title: "Clans",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[5],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.PlayersScreen",
          label: "Players",
          title: "Players",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[5],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },

        {
          screen: "awesome-places.CardsScreen",
          label: "Cards",
          title: "Cards",
          icon: sources[2],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[5],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.TournamentsScreen",
          label: "Tournaments",
          title: "Tournaments",
          icon: sources[3],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[5],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.LocationsScreen",
          label: "Locations",
          title: "Locations",
          icon: sources[4],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[5],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      },
      //for Android
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      }
    });
  });
};

export default startTabs;
