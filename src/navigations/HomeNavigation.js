import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Mail from '../Screens/Mail';
import Videos from '../Screens/Videos';
import Routes from '../constants/Routes';
import Chat from '../Screens/Chat';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator 
        screenOptions={({route})=>({
            tabBarShowLabel:false,
            tabBarStyle: { backgroundColor: 'grey' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'darkgrey',
            headerStyle: { backgroundColor: '#343232' },
            headerTitleAlign: 'center',
            headerTintColor:'white',
            headerRight: () => (
                <Icon name="settings-sharp" size={35} color="#FFF" />
              ),
            tabBarIcon:({color,size,focused}) =>{
                let iconName;
                if(route.name === Routes.HOME_TAB){
                    iconName = focused ? 'radio-button-on-sharp' : 'radio-button-on-outline'
                }else if(route.name === Routes.MAIL){
                    iconName = focused ? 'mail-sharp' : 'mail-outline'
                }else if(route.name === Routes.VIDEO){
                    iconName = focused ? 'film-sharp' : 'film-outline'
                }else if(route.name === Routes.CHAT){
                    iconName = focused ? 'chatbox-sharp' : 'chatbox-outline'
                }
                return <Icon name={iconName} size={28} color={color} />
            },

           
        })}
    >
      <Tab.Screen name={Routes.HOME_TAB} component={Home} options={{headerTitle:'VidCom'}}   />
      <Tab.Screen name={Routes.MAIL} component={Mail} options={{headerTitle:'VidMail'}} />
      <Tab.Screen name={Routes.VIDEO} component={Videos} options={{headerTitle:'Videos'}} />
      <Tab.Screen name={Routes.CHAT} component={Chat} options={{headerTitle:'Video Chat'}} />
    </Tab.Navigator>
  );
}

export default HomeNavigation