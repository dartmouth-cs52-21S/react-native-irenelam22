import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideoDetail from '../components/video_detail';

import VideoList from '../components/video_list';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const SearchTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={VideoList}
        options={{
          title: 'Youtube Search',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
}

export default SearchTab;