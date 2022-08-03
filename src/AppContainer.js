import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './MainScreens/Main';
import User from './MainScreens/User';
import Repository from './MainScreens/Repository';
import BackHeader from './Components/BackHeader';
import { AppProvider } from './AppContext';

const Stack = createNativeStackNavigator();

const App = React.memo(() => {

  const [username, setUsername] = useState('');
  const [reponame, setReponame] = useState('');

  const dispatchNameEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_USERNAME':
        setUsername(payload.username);
        return;
      case 'ADD_REPONAME':
        setReponame(payload.reponame)
        return;
      default:
        return;
    }
  };

  useEffect(() => {
  }, []);

  return (
    <AppProvider value={{username, reponame, dispatchNameEvent}} >
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: 'white' }}>
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
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  );
});

App.displayName = 'App';
export default App;
