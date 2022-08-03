import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './MainScreens/Main';
import User from './MainScreens/User';
import Repository from './MainScreens/Repository';
import Success from './MainScreens/Success';
import BackHeader from './Components/BackHeader';
import { AppProvider } from './AppContext';

const Stack = createNativeStackNavigator();

const App = React.memo(() => {

  const [username, setUsername] = useState('');
  const [reponame, setReponame] = useState('');
  const [color, setColor] = useState('white');

  const dispatchNameEvent = (actionType, payload) => {
    switch (actionType) {
      case 'SET_USERNAME':
        setUsername(payload.username);
        return;
      case 'SET_REPONAME':
        setReponame(payload.reponame)
        return;
      case 'SET_COLOR':
        setColor(payload.color)
        return;
      default:
        return;
    }
  };

  return (
    <AppProvider value={{username, reponame, color, dispatchNameEvent}} >
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: color }}>
          <Stack.Navigator
            initialRouteName={"Main"}>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="User"
              component={User}
              options={{
                header: () => (
                  <BackHeader title={"USER"} />
                ),
              }}
            />
            <Stack.Screen
              name="Repository"
              component={Repository}
              options={{
                header: () => (
                  <BackHeader title={"REPOSITORY"} />
                ),
              }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  );
});

App.displayName = 'App';
export default App;
