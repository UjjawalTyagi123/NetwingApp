import { React, useState, useEffect } from "react";
import { CheckBox } from 'react-native-elements';
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
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Navbar from "./Navbar";

export default function Service() {
  const route = useRoute();
  var Data = [];
  const [data, setData] = useState([]);
  const [enquiry, setEnquiry] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const { _id } = route.params;
  const [SignUpData, setSignUpData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
 
  const toggleOption = (optionId) => {
    const isSelected = selectedOptions.includes(optionId);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSignUpChange = (key, value) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmitSignUp = () => {
    console.log("selectedOptions");
    console.log(selectedOptions);
  };

  const base_url_service = process.env.EXPO_PUBLIC_API_service;
  useEffect(() => {
    const getDataFromApi = async () => {
      let data = await axios.get(base_url_service);

      Data = JSON.parse(JSON.stringify(data.data.services));
      const upd_Data = Data.filter((d) => d.catId === _id);

      setData(upd_Data);
    };
    getDataFromApi(); 
  }, []);


  return (
    <ScrollView >
      <Navbar />
      <TouchableOpacity
        onPress={() => setEnquiry(!enquiry)}
        style={{
          marginTop: 10,
          marginLeft: 230,
          height: 50,
          width: 140,
          backgroundColor: "#87CEEB",
          padding: 10,
          borderRadius: 30,
        }}
      >
        <Text style={{ fontSize: 20 }}>{!enquiry?'Book services':'services'}</Text>
      </TouchableOpacity>
      {!enquiry ? (
        data.length > 0 ? (
          data.map((d) => <Card key={d.id} item={d} />)
        ) : (
          <Text style={{ fontSize: 18, marginLeft: 150, marginTop: 100 }}>
            Loading...
          </Text>
        )
      ) : (
        <View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 15,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              {" "}
              Name
            </Text>
            <TextInput
              style={styles.input}
              value={SignUpData.name}
              onChangeText={(value) => handleSignUpChange("name", value)}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 15,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              Email
            </Text>
            <TextInput
              style={styles.input}
              value={SignUpData.email}
              onChangeText={(value) => handleSignUpChange("email", value)}
            />
          </View>
      
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 15,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              Mobile no
            </Text>
            <TextInput
              style={styles.input}
              value={SignUpData.name}
              onChangeText={(value) => handleSignUpChange("name", value)}
            />
          </View>
         
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 15,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              location
            </Text>
            <TextInput
              style={styles.input}
              value={SignUpData.name}
              onChangeText={(value) => handleSignUpChange("name", value)}
            />
          </View>
         
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 15,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              message
            </Text>
            <TextInput
              style={[styles.input, { height: 100 }]}
              value={SignUpData.name}
              onChangeText={(value) => handleSignUpChange("name", value)}
            />
          </View>

          <View>
         
            <TouchableOpacity style={[styles.input,{marginTop:30}]} onPress={()=>setdropdown(true)}>
            <Text
              style={{
                marginLeft: 18,
                fontSize: 15,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
               choose services:
            </Text>
            </TouchableOpacity>
  
          </View>
          { dropdown? <ScrollView contentContainerStyle={styles.container}>
          <View >
          <TouchableOpacity onPress={()=>setdropdown(!dropdown)} ><Text style={{fontSize:25,color:'green',fontWeight:"500"}}>confirm</Text></TouchableOpacity>
      {data.map((option) => (
        <CheckBox
          key={option.id}
          title={option.name}
          checked={selectedOptions.includes(option.id)}
          onPress={() => toggleOption(option.id)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
       
      ))}
     
    </View>
       </ScrollView>:''}
          <TouchableOpacity style={styles.signBtn}  onPress={handleSubmitSignUp}>
            <Text
              style={{ marginLeft: 14, color: "white", fontSize: 19 }}
             
            >
              Book now
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("vendors", { data: item.type, loc: loc })
      }
    >
      <View style={styles.item}>
        <Text style={{ margin: 8, fontSize: 20 }}>{item.name}</Text>
        <Image
          style={{ width: 250, height: 180, marginLeft: 15 }}
          source={{
            uri: `https://hometriangle.netwingsit.in/uploads/services/${item.images}`,
          }}
        />
        <Text style={{ margin: 8, fontSize: 20 }}>₹ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdown:{
    backgroundColor: "#FFFFFF",
   
    overflow:'scroll',
  height: 420,
  width: 350,
  zIndex: 2,
  position: "absolute",
  top: 350,
  left:15,
  paddingTop: 40,
  paddingLeft: 30,
  paddingBottom:20,
  },
  item: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Android-specific elevation property
    borderColor: "black",
    marginVertical: 8,
    marginHorizontal: 16,
    height: "content-fit",
    paddingBottom: 10,
    width: 350, // Adjust width based on your grid requirements
    color: "black",
  },
  input: {
    height: 60,
    width: "80%",
    marginLeft: 15,
    fontSize: 17,
    padding: 10,
    borderColor: "grey",
    borderWidth: 1,
  },
  signBtn: {
    width: 310,
    height: 50,
    backgroundColor: "green",
    margin: 20,
    paddingTop: 10,
    paddingLeft: 100,
    color: "white",

    borderRadius: 40,
  },
  container: {
    padding: 20,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginVertical: 10,
  },
  checkboxText: {
    fontSize: 16,
  },
});
