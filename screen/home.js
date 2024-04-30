import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { React, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

import Navbar from "./Navbar";

export default function Home() {
  const navigation = useNavigation();


 
  var Data = [];
  // var Def_Data = [
  //   {
  //     id: 1,
  //     image: home_img,
  //     name: "Home Appliances",
  //     loc: ["delhi", "meerut", "noida"],
  //   },
  //   {
  //     id: 2,
  //     image: elec,
  //     name: "Electronics Appliances",
  //     loc: ["delhi", "meerut"],
  //   },
  //   {
  //     id: 3,
  //     image: sallon,
  //     name: "women sallon",
  //     loc: ["delhi", "noida", "agra"],
  //   },
  //   {
  //     id: 4,
  //     image: sallon,
  //     name: "women sallon",
  //     loc: ["delhi", "noida", "agra"],
  //   },
  //   {
  //     id: 5,
  //     image: sallon,
  //     name: "women sallon",
  //     loc: ["delhi", "noida", "agra"],
  //   },
  //   {
  //     id: 6,
  //     image: sallon,
  //     name: "women sallon",
  //     loc: ["delhi", "noida", "agra"],
  //   },
  //   {
  //     id: 7,
  //     image: sallon,
  //     name: "women sallon",
  //     loc: ["delhi", "noida", "agra"],
  //   },
  //   {
  //     id: 8,
  //     image: "",
  //     name: "women sallon",
  //     loc: ["delhi", "noida", "agra"],
  //     description: "abcdef",
  //   },
  // ];
  var fin_dat;

  const [textInputValue, setTextInputValue] = useState(" ");
  const [close, setClose] = useState(false);
  const [data, setData] = useState(Data);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const getDataFromApi = async () => {
    let data = await axios.get(
      "https://hometriangle.netwingsit.in/api/categories"
    );

    Data = JSON.parse(JSON.stringify(data.data.categories));
    console.log(Data);
    setData(Data);
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  const handleTextInputChange = (text) => {
    setTextInputValue(text);
  };
 
  const handleSubmit = () => {
    var ob_loc = { loc: textInputValue };

    let ud = [];
    for (let i = 0; i < Data.length; i++) {
      for (let j = 0; j < Data[i].loc.length; j++) {
        if (
          Data[i].loc[j].toLocaleLowerCase() == textInputValue.toLowerCase()
        ) {
          ud.push({ ...Data[i], ob_loc });
        }
      }
    }
    if (textInputValue == ("" || " ")) {
      Alert.alert("Please enter city");
      setData(Def_Data);
    } else {
      setData(ud);
    }
  };
   
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View>
        <Navbar />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setData(Def_Data)}
          style={{ marginTop: 20, width: 50, paddingLeft: 10 }}
        >
          <Text
            style={{
              fontSize: 15,
              backgroundColor: "#d3d3d3",
              paddingLeft: 10,
              borderRadius: 200,
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter your city"
          onChangeText={handleTextInputChange}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.searchButton}>search</Text>
        </TouchableOpacity>
      </View>
{  data.length > 0?
      <FlatList
        style={{ marginTop: 20 }}
        data={data}
        numColumns={3}
        ListFooterComponent={<View style={{ height: 200 }} />}
        renderItem={({ item }) => <Card item={item} />}
      />:<Text style={{marginLeft:70,fontSize:20,marginTop:30}}>Loading...</Text>}
    </View>
  );
}

const Card = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };          

  const base_url = process.env.EXPO_PUBLIC_API_VEC;
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("service", { _id: item.id })}
    >
      <View style={styles.item}>
           <Image
          style={{ width: 80, height: 80 }}
          source={ {uri:`https://hometriangle.netwingsit.in/uploads/categories/vector/${item.vector}`}}
        /> 
        <Text style={{ margin: 0, fontSize: 15,fontWeight:"300" }}>{item.name}</Text>
     
        {/* <View>  
          <Text numberOfLines={expanded ? undefined : 3}>
            {item.description}
          </Text>
          {item.description.length > 50 && (
            <TouchableOpacity onPress={toggleExpanded}>
              <Text style={{ color: "blue" }}>
                {expanded ? "Read Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          )}
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
  },

  zitem: {
    backgroundColor: "#FFFFFF",
    height: 400,
    width: 200,
    zIndex: 2,
    position: "absolute",
    top: 10,
    paddingTop: 40,
    paddingLeft: 30,
  },
  zitems: {
    fontSize: 30,
    marginTop: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    borderColor: "black",
    height: 60,
    width: "90%",

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 40,
  },
  input: {
    height: 60,
    width: "50%",
    marginLeft: 15,
    fontSize: 15,
  },
  searchButton: {
    height: 80,

    marginTop: 10,
    fontSize: 20,
  },
  serviceContainer: {
    flex: 1,
  },

  item: {
    paddingLeft:5,
    flex:1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 8, // Radius of the shadow blur
    elevation: 5, // Android-specific elevation property
    borderColor: "black",
    marginVertical: 8,
    marginHorizontal: 8,
    height: "content-fit",

    width: 115, // Adjust width based on your grid requirements
    color: "black",
  },
});
