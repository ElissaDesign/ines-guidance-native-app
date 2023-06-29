import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";

const MapComponent = () => {
  const latitude = -1.5010982;
  const longitude = 29.6062898;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add marker for pointing */}
        <Marker coordinate={{ latitude, longitude }}>
          <Icon name="location-outline" size={30} color="#ff0000" />
        </Marker>

        {/* Add marker for directions */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <Icon name="compass-outline" size={30} color="#00ff00" />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
