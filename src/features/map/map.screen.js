import React from "react";
import { Dimensions, Text, View } from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import styled from "styled-components/native";

import { SafeArea } from "../../components/utility/safe-area.component";

const StyledMapView = styled(MapView)`
  width: ${Math.floor(Dimensions.get("window").width)}px;
  height: ${Math.floor(Dimensions.get("window").height) - 40}px;
`;
const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MapScreen = () => (
  <SafeArea>
    <MapContainer>
      <StyledMapView
        region={{
          latitude: 8.69659071711335,
          longitude: 77.74215476000238,
          latitudeDelta: 0.0806,
          longitudeDelta: 0.0411,
        }}
      >
        <Marker
          coordinate={{
            latitude: 8.69659071711335,
            longitude: 77.74215476000238,
          }}
          key={Marker.key}
        >
          <Callout>
            <Text>home</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: 8.69659071711335,
            longitude: 77.74215476000238,
          }}
          radius={2000}
        />
      </StyledMapView>
    </MapContainer>
  </SafeArea>
);
