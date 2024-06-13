import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

const ItemListNews = (props) => {
  const { navigation, dulieu } = props;

  const ClickNe = () => {
    //Truyền tên Screen muốn chuyển qua vào navigate
    navigation.navigate("NewDetail", { id: dulieu._id });
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={ClickNe}>
        <Image source={{ uri: dulieu.image }} style={styles.imageNews} />
        <View style={styles.boxContent}>
          <Text style={styles.textType}>Tin tức</Text>
          <Text style={styles.textTitle} numberOfLines={2}>
            {dulieu.title}
          </Text>
          <View style={styles.boxEnd}>
            <View style={styles.boxEnd}>
              <View style={styles.boxEnd}>
                <Image
                  source={require("./Image/LogoBTC.png")}
                  style={styles.imageLogoNews}
                />
                <Text style={styles.textName}>BBC News</Text>
              </View>
              <View style={[styles.boxTime, styles.boxEnd]}>
                <Image
                  source={require("./Image/Clock.png")}
                  style={styles.imageClock}
                />
                <Text style={styles.textTime}>14m ago</Text>
              </View>
            </View>
            <Image
              source={require("./Image/Vector.png")}
              style={styles.imageVector}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemListNews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  boxContent: {
    marginStart: 8,
    justifyContent: "space-between",
  },
  imageNews: {
    width: 96,
    height: 96,
  },
  textType: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 20,
    color: "#4E4B66",
  },
  textTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 21.3,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: "#000000",
    width: 310,
  },
  boxEnd: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxTime: {
    marginStart: 10,
  },
  imageLogoNews: {
    width: 22,
    height: 22,
  },
  textName: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    color: "#4E4B66",
    marginStart: 5,
  },
  imageClock: {
    width: 16,
    height: 16,
  },
  textTime: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
    color: "#4E4B66",
    marginStart: 5,
  },
  imageVector: {
    width: 15,
    height: 2,
  },
});
