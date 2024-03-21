import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {baseColors} from './theme'
import {HeaderComponent} from './src/components/HeaderComponent'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? baseColors.neutrals.black : baseColors.neutrals.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? baseColors.neutrals.black : baseColors.neutrals.white,
          }}>
          <HeaderComponent title='Prototype'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
