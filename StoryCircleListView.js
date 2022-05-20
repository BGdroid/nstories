import React from "react";
import { View, FlatList } from "react-native";
import StoryCircleListItem from "./StoryCircleListItem";

const StoryCircleListView = (props) => {
  const { data, handleStoryItemPress, childItem } = props;

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        horizontal
        style={{ paddingLeft: 12 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ flex: 1, width: 8 }} />}
        renderItem={({ item, index }) => (
          <StoryCircleListItem
            childItem={childItem}
            handleStoryItemPress={() =>
              handleStoryItemPress && handleStoryItemPress(item, index)
            }
            item={item}
          />
        )}
      />
    </View>
  );
};

export default StoryCircleListView;
