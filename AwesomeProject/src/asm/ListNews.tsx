import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ItemListNews from "./ItemListNews";
import ListNewsDemo from "../demo/ListNewsDemo";
import AxiosIntance from "./ultil/AxiosIntance";

const Item = ({ type }) => (
  <Pressable style={styles.pressableType}>
    <Text style={[styles.textType, styles.textType_1]}>{type}</Text>
  </Pressable>
);

const ListNews = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  let timeOut = null;

  const countDownSearch = (Searchtext) => {
    if (timeOut != null) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      search(Searchtext);
    }, 1000);
  };

  useEffect(() => {
    const getNews = async () => {
      const response = await AxiosIntance().get("articles");
      // console.log("List: " + response)
      if (response.error == false) {
        setdataNe(response.data);
        setisLoading(false);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    };

    getNews();

    return () => {};
  }, []);

  const search = async (text) => {
    const result = await AxiosIntance().get("articles/search?title=" + text);
    if (result.error == false) {
      setdataNe(result.data);
      setisLoading(false);
    } else {
      ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./Image/Logo.png")} style={styles.imageLogo} />
        <Image source={require("./Image/Ring.png")} style={styles.imageRing} />
      </View>
      <View style={styles.boxSearch}>
        <Image
          source={require("./Image/VectorSearch.png")}
          style={styles.imgsearch}
        />
        <TextInput
          style={styles.textInput}
          placeholder={"Search"}
          onChangeText={(text) => countDownSearch(text)}
        />
        <Image
          source={require("./Image/VectorFilter.png")}
          style={styles.imgsearch}
        />
      </View>
      <View style={styles.boxMenu}>
        <Text style={styles.textMenu_1}>Lastest</Text>
        <Text style={styles.textMenu_2}>See all</Text>
      </View>
      <View style={styles.boxType}>
        <Pressable style={styles.pressableAll}>
          <Text style={[styles.textType, styles.textType_1]}>All</Text>
        </Pressable>
        <Text style={styles.textType}>Sports</Text>
        <Text style={styles.textType}>Politic</Text>
        <Text style={styles.textType}>Bussiness</Text>
        <Text style={styles.textType}>Health</Text>
        <Text style={styles.textType}>Travel </Text>
      </View>
      {/* <FlatList
                data={dataType}
                renderItem={({ item }) => <Item type={item} />}
                keyExtractor={item => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} /> */}
      {isLoading == true ? (
        <View style={styles.loading}>
          <Text>Loading ...</Text>
          <ActivityIndicator size={"large"} color="#FFF00" />
        </View>
      ) : (
        <FlatList
          data={dataNe}
          renderItem={({ item }) => (
            <ItemListNews dulieu={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
        ></FlatList>
      )}
      {/* <FlatList
                        data={dataNe}
                        renderItem={({ item }) => <ItemListNews dulieu={item} navigation={navigation} />}
                        keyExtractor={item => item._id}>
                    </FlatList> */}
      {/* <ListNewsDemo/> */}
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 24,
    paddingEnd: 24,
    paddingTop: 24,
    backgroundColor: "white",
  },
  boxSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  textInput: {
    width: "80%",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#4E4B66",
  },
  imgsearch: {
    width: 30,
    height: 30,
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  imageLogo: {
    width: 144,
    height: 43,
  },
  imageRing: {
    width: 60,
    height: 60,
  },
  boxMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textMenu_1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    color: "black",
  },
  textMenu_2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#4E4B66",
  },
  boxType: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  textType: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    color: "#4E4B66",
  },
  textType_1: {
    color: "black",
  },
  pressableAll: {
    borderBottomWidth: 2,
    borderColor: "#1877F2",
  },
  pressableType: {
    marginStart: 10,
    marginEnd: 10,
  },
});

const dataType = [
  "All",
  "Sport",
  "Politis",
  "Bussiness",
  "Health",
  "Travel",
  "Science",
];
