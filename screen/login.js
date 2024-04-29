import {React,useState }from 'react'
import { View ,Text,StyleSheet,Input, TextInput, TouchableOpacity} from 'react-native'
import { useRoute } from '@react-navigation/native';
import Navbar from './Navbar'

export default function Login() {
    const [otp,setOtp]=useState(true)
    const [goSign,setGoSign]=useState(false)
    const [otpvalue,setOtpvalue]=useState('')
    const route = useRoute();
    const {data}=route.params


      const [SignUpData, setSignUpData] = useState({
        name: '',
        email: '',
        mobile:'',
        password: '',
      });
    
    const handleSignUpChange = (key, value) => {
        setSignUpData(prevState => ({
          ...prevState,
          [key]: value,
        }));
      };
    
    const handlGetOtp=()=>{
      setOtpvalue('')
      setOtp(false)
    }

    const handlSubmitOtp=()=>{
      setGoSign(true) 
      
    }
   const handleSubmitSignUp=()=>{
      console.log(SignUpData);
   }

  return (
     <View> 
     <Navbar/>
 
   { data=='signup' ?
     <View   style={!goSign?styles.loginContainer:styles.incHeight}>

     {!goSign?<View>
      { otp?
      <View> 
         <Text style={{marginLeft:18,fontSize:15,marginBottom:10}}>Enter Phone number</Text>
         <TextInput style={styles.input} value={SignUpData.mobile} onChangeText={value=>handleSignUpChange('mobile',value)}/>
           
         <TouchableOpacity onPress={handlGetOtp}> 
         <Text style={{marginLeft:18,fontSize:18,marginTop:10}}>Get OTP</Text></TouchableOpacity>
        
       </View>: 
       <View> 
         <Text style={{marginLeft:18,fontSize:15,marginBottom:10}}>Enter OTP</Text>
         <TextInput value={otpvalue} onChangeText={(text)=>setOtpvalue(text)} style={styles.input}/>
           
         <TouchableOpacity onPress={handlSubmitOtp}> 
         <Text style={{marginLeft:18,fontSize:18,marginTop:10}}>Submit</Text></TouchableOpacity>
       </View>
     }
      
      
     </View>:''
}
      {goSign?<View>
       <Text style={{marginLeft:40,fontSize:20,color:'#000080'}}>Creating new account</Text>
       <View style={{marginTop:20}}>
       <Text style={{marginLeft:18,fontSize:15,marginBottom:10,marginTop:10}}>Enter Name</Text>
      <TextInput style={styles.input} value={SignUpData.name} onChangeText={value=>handleSignUpChange('name',value)}/>
       </View>
        

    <View style={{marginTop:20}}>
       <Text style={{marginLeft:18,fontSize:15,marginBottom:10,marginTop:10}}>Enter Email</Text>
      <TextInput style={styles.input} value={SignUpData.email} onChangeText={value=>handleSignUpChange('email',value)}/>
       </View>
       
       <View style={{marginTop:20}}>
       <Text style={{marginLeft:18,fontSize:15,marginBottom:10,marginTop:10}}>Enter Password</Text>
      <TextInput secureTextEntry={true}  style={styles.input} value={SignUpData.password} onChangeText={value=>handleSignUpChange('password',value)}/>
       </View> 
          
       
       <TouchableOpacity style={styles.signBtn} ><Text style={{marginLeft:14,color:'white'}} onPress={handleSubmitSignUp}>Sign up</Text></TouchableOpacity>

         </View>:''}

     </View>:

      <View style={styles.incHeight}>
      <Text style={{marginLeft:40,fontSize:20,color:'#000080'}}>Logging into account</Text>
      <View style={{marginTop:20}}>
       <Text style={{marginLeft:18,fontSize:15,marginBottom:10,marginTop:10}}>Enter Email</Text>
      <TextInput style={styles.input}/>
       </View>
       
       <View style={{marginTop:20}}>
       <Text style={{marginLeft:18,fontSize:15,marginBottom:10,marginTop:10}}>Enter Password</Text>
      <TextInput secureTextEntry={true}  style={styles.input}/>
      <TouchableOpacity style={styles.signBtn}><Text style={{marginLeft:14,color:'white'}}>login</Text></TouchableOpacity>
       </View> 

      </View>
    }
       

     
    </View>
   
  )
}

const styles=StyleSheet.create({
    loginContainer:{
        marginTop:180,
        marginLeft:30,
        height:200,
        padding:30,
        marginRight:30,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
        shadowOpacity: 0.1, // Opacity of the shadow
        shadowRadius: 8, // Radius of the shadow blur
        elevation: 5, // Android-specific elevation property
        borderColor:'black',
    },
    input: {
      height:60,
      width:'80%',
      marginLeft:15,
      fontSize:17,
      padding:10,
      borderColor:'grey',
      borderWidth:1
    },
    incHeight:{
        marginTop:70,
        marginLeft:30,
        height:650,
        padding:30,
        marginRight:30,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
        shadowOpacity: 0.1, // Opacity of the shadow
        shadowRadius: 8, // Radius of the shadow blur
        elevation: 5, // Android-specific elevation property
        borderColor:'black',
    },
    signBtn:{
        width:90,
        height:40,
        backgroundColor:'#24a0ed',
        margin:20,
        padding:10,
        color:'white'
    }
})