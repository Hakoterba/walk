import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#1E1E1E',
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
            }}
        />
        <Tabs.Screen
            name="parcours"
            options={{
            title: 'Parcours',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'location-sharp' : 'location-outline'} color={color} size={24}/>
            ),
            }}
        />
        <Tabs.Screen
            name="profil"
            options={{
            title: 'Profil',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24}/>
            ),
            }}
        />
        </Tabs>
    );
}
