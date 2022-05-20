import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const StoryCircleListItem = (props) => {
  const { item, childItem } = props;

  const _handleItemPress = (item) => {
    const { handleStoryItemPress } = props;
    if (handleStoryItemPress) handleStoryItemPress(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => _handleItemPress(item)}>
        {childItem ? childItem(item) : null}
      </TouchableOpacity>
    </View>
  );
};

export default StoryCircleListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginRight: 10,
  },
});
