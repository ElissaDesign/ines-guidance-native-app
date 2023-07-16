import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import Tabs from "./tabs";
import AdminSreen from "../screens/admin/AdminScreen";

// administrations
import Administration from "../screens/admin/administration/Administration";
import AddAdministration from "../screens/admin/administration/AddAdministration";
import StudentUnion from "../screens/admin/studentUnion/StudentUnion";
import AddStudentUnion from "../screens/admin/studentUnion/AddStudentUnion";
import InesStatus from "../screens/admin/inesStatus/InesStatus";
import AddInesStatus from "../screens/admin/inesStatus/AddInesStatus";
import News from "../screens/admin/inesNews/News";
import AddNews from "../screens/admin/inesNews/AddNews";

import AdministrationScreen from "../components/AdministrationScreen";
import FinanceScreen from "../components/FinanceScreen";
import FaculitiesScreen from "../components/FaculitiesScreen";
import RegistrationScreen from "../components/RegistrationScreen";
import DepartmentsScreen from "../components/DepartmentsScreen";
import PartnersScreen from "../components/PartnersScreen";
import StudentUnionScreen from "../components/StudentUnionScreen";
import InesStatusScreen from "../components/InesStatusScreen";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={Tabs}
        options={{ headerShown: false, headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Admin" component={AdminSreen} />

      {/* admin==== administration */}
      <Stack.Screen name="Administration" component={Administration} />
      <Stack.Screen name="Add Administration" component={AddAdministration} />
      <Stack.Screen name="Student Union" component={StudentUnion} />
      <Stack.Screen
        name="Add Student Union Staff"
        component={AddStudentUnion}
      />
      <Stack.Screen name="Ines Status" component={InesStatus} />
      <Stack.Screen name="Add Ines Status" component={AddInesStatus} />

      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Add News" component={AddNews} />

      {/* user screens === administration */}
      <Stack.Screen
        name="Ines Administration"
        component={AdministrationScreen}
      />
      <Stack.Screen name="Ines Finance" component={FinanceScreen} />
      <Stack.Screen name="Ines Programs" component={FaculitiesScreen} />
      <Stack.Screen name="Ines Registration" component={RegistrationScreen} />
      <Stack.Screen name="Ines Departments" component={DepartmentsScreen} />
      <Stack.Screen name="Ines Partners" component={PartnersScreen} />
      <Stack.Screen name="Ines Student Union" component={StudentUnionScreen} />
      <Stack.Screen name="Ines Status Images" component={InesStatusScreen} />
    </Stack.Navigator>
  );
}
