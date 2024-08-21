import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import AxiosIntance from "./ultil/AxiosIntance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ItemListNews from "./ItemListNews";
import { AppContext } from "./ultil/AppContext";

const DetailScreen = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isnews, setisnews] = useState(true);
  const { inforUser } = useContext(AppContext);
  const [dataNews, setdataNews] = useState([]);
  const [newsOfMe, setnewsOfMe] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      // await AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2ZjU3MTAzZTI0ZTAwMTQ0N2NhMTAiLCJlbWFpbCI6ImxvbmdAZ21haWwuY29tIiwibmFtZSI6IiIsImFkZHJlc3MiOiIiLCJwaG9uZSI6IiIsImF2YXRhciI6IiIsImlhdCI6MTY3NjkwNzIxNywiZXhwIjoxNjc5NDk5MjE3fQ.3mdCNjEc41UYuFQNOKrCSGIDzjoWovbIhGnzxX7yZTo");
      const responseNews = await AxiosIntance().get("articles");
      // console.log("List: " + response)
      if (responseNews.error == false) {
        setdataNe(responseNews.data);
        setdataNews(responseNews.data);
        setIsLoading(false);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }

      const responseMe = await AxiosIntance().get("articles/my-articles");
      // console.log("List: " + response)
      if (responseMe.error == false) {
        setnewsOfMe(responseMe.data);
        setIsLoading(false);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    };
    getNews();
    return () => {};
  }, []);

  const changPages = (type) => {
    if (type == true) {
      setdataNe(dataNews);
      setisnews(true);
    } else {
      setdataNe(newsOfMe);
      setisnews(false);
    }
  };

  const changPage_Edit = () => {
    navigation.navigate("EditProfile");
  };

  const changPage_Addnews = () => {
    navigation.navigate("CreateNews");
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <View></View>
        <Text style={styles.textTabBar}>Profile</Text>
        <Image
          style={styles.imgTabBar}
          source={require("./Image/ImageSetting.png")}
        />
      </View>
      <View style={styles.boxHeader}>
        <View style={styles.boxHeader_1}>
          <Image style={styles.imgUser} source={{ uri: inforUser.avatar }} />
          <View style={styles.header}>
            <Text style={styles.header_1}>2156</Text>
            <Text style={styles.header_2}>Followers</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.header_1}>567</Text>
            <Text style={styles.header_2}>Following</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.header_1}>23</Text>
            <Text style={styles.header_2}>News</Text>
          </View>
        </View>
        <View style={styles.boxHeader_2}>
          <Text style={styles.header_1}>{inforUser.name}</Text>
          <Text style={styles.header_2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
      <View style={styles.boxButtonEdit}>
        <TouchableOpacity style={styles.buttonEdit} onPress={changPage_Edit}>
          <Text style={styles.textButtonEdit}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEdit}>
          <Text style={styles.textButtonEdit}>Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxButtonPage}>
        <View style={styles.boxButtonPage_1}>
          <TouchableOpacity
            style={styles.buttonPage}
            onPress={() => changPages(true)}
          >
            <Text style={styles.textButtonPage}>News</Text>
            {isnews ? <View style={styles.boxIsNews}></View> : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonPage}
            onPress={() => changPages(false)}
          >
            <Text style={styles.textButtonPage}>Recent</Text>
            {!isnews ? <View style={styles.boxIsNews}></View> : null}
          </TouchableOpacity>
        </View>
      </View>
      {isLoading == true ? (
        <View style={styles.loading}>
          <Text>Loading ...</Text>
          <ActivityIndicator size={"large"} color="#FFF00" />
        </View>
      ) : (
        <FlatList
          style={styles.listNews}
          data={dataNe}
          renderItem={({ item }) => (
            <ItemListNews dulieu={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
        ></FlatList>
      )}
      <View style={styles.boxAddNews}>
        <TouchableOpacity onPress={changPage_Addnews}>
          <Image
            style={styles.imgAddNews}
            source={require("./Image/ImageAddNews.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTabBar: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 20,
    color: "#000",
    fontWeight: "400",
  },
  imgTabBar: {
    width: 25,
    height: 25,
  },
  boxHeader: {
    marginTop: 13,
  },
  imgUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  boxHeader_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxHeader_2: {
    justifyContent: "space-between",
    marginTop: 16,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_1: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 20,
    color: "#000",
    fontWeight: "600",
    lineHeight: 24,
  },
  header_2: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 15,
    color: "#4E4B66",
    fontWeight: "400",
  },
  boxButtonEdit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  buttonEdit: {
    width: "45%",
    height: 40,
    backgroundColor: "#1877F2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonEdit: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  boxButtonPage: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxButtonPage_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPage: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  textButtonPage: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 15,
    color: "black",
    marginTop: 13,
  },
  boxIsNews: {
    borderWidth: 1,
    width: 45,
  },
  listNews: {
    marginTop: 24,
  },
  boxAddNews: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
  imgAddNews: {
    width: 60,
    height: 60,
  },
});
