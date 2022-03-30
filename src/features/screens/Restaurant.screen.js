import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, Text, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard.component";
import SafeArea from "../../utils/SafeArea.component";

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantList = styled(FlatList).attrs({
  numColumns: 1,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[1, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => item}
        renderItem={() => <RestaurantInfoCard />}
      />
    </SafeArea>
  );
}
