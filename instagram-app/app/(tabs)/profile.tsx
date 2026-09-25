import React,{useState}from"react";
import{View,Text,StyleSheet,Image,FlatList,Pressable,Modal,TextInput,Switch,ScrollView,RefreshControl}from"react-native";
import{Ionicons}from"@expo/vector-icons";

const imgs=Array.from({length:18},(_,i)=>"https://picsum.photos/id/"+(200+i)+"/600/600");
const highlights=[["Weekend 5.15","https://picsum.photos/id/1011/200/200"],["New","https://picsum.photos/id/1015/200/200"]];
const BG="#0b0f14",CARD="#292e34",MUTED="#9ba1aa";

export default function Profile(){
 const[followers,setFollowers]=useState(18200),[following,setFollowing]=useState(0),[username,setUsername]=useState("wolf_texclip");
 const[bio,setBio]=useState("☆الله☆\n《😎تبلیغات ارزان دایرکت》\n《😎اما بودن سخت نیست غیر ممکن😎》\n《👑انگار با دشتون رفته این جا شکسا این حوالی منم پادشا👑》");
 const[link,setLink]=useState("t.me/wolf_texclips"),[avatar,setAvatar]=useState("https://picsum.photos/id/1025/300/300");
 const[pro,setPro]=useState(true),[edit,setEdit]=useState(false),[refreshing,setRefreshing]=useState(false);
 const refresh=()=>{setRefreshing(true);setTimeout(()=>setRefreshing(false),900)};
 return <View style={s.root}>
  <View style={s.header}>
   <Pressable><Ionicons name="menu-outline" size={34} color="#fff"/></Pressable>
   <View style={s.center}><Ionicons name="at-outline" size={31} color="#fff"/><Text style={s.username}>{username}</Text></View>
   <Pressable><Ionicons name="add-outline" size={38} color="#fff"/></Pressable>
  </View>
  <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor="#fff" colors={["#fff"]}/>}>
   <View style={s.profileTop}>
    <View style={s.avatarWrap}><Image source={{uri:avatar}} style={s.avatar}/><View style={s.plus}><Text style={s.plusText}>+</Text></View><Text style={s.avatarLabel}>سازنده ویدیو</Text></View>
    <View style={s.stats}>
      <Text style={s.stat}><Text style={s.num}>93</Text>{"\n"}پست</Text>
      <Text style={s.stat}><Text style={s.num}>۱۸،۲ هزار</Text>{"\n"}دنبال‌کنندگان</Text>
      <Text style={s.stat}><Text style={s.num}>۰</Text>{"\n"}دنبال‌شونده</Text>
    </View>
   </View>
   <View style={s.bio}><Text style={s.bioText}>{bio}</Text><Text style={s.link}>{link} ↗</Text></View>
   <Pressable style={s.dashboard}><Text style={s.dashTitle}>داشبورد حرفه‌ای</Text><Text style={s.dashSub}>۸۲ بازدید در ۳۰ روز اخیر.</Text></Pressable>
   <View style={s.actions}><Pressable style={s.button} onPress={()=>setEdit(true)}><Text style={s.buttonText}>ویرایش نمایه</Text></Pressable><Pressable style={s.button}><Text style={s.buttonText}>اشتراک‌گذاری نمایه</Text></Pressable></View>
   <ScrollView horizontal inverted showsHorizontalScrollIndicator={false} contentContainerStyle={s.highlights}>
    <Pressable style={s.highlight}><View style={s.newCircle}><Ionicons name="add" size={39} color="#fff"/></View><Text style={s.highlightText}>جدید</Text></Pressable>
    {highlights.map(h=><Pressable key={h[0]} style={s.highlight}><Image source={{uri:h[1]}} style={s.highlightImg}/><Text style={s.highlightText}>{h[0]}</Text></Pressable>)}
   </ScrollView>
   <View style={s.tabs}><Pressable style={s.tabActive}><Ionicons name="grid" size={29} color="#fff"/></Pressable><Pressable style={s.tab}><Ionicons name="play-circle-outline" size={29} color="#aeb4bd"/></Pressable><Pressable style={s.tab}><Ionicons name="person-circle-outline" size={29} color="#aeb4bd"/></Pressable></View>
   <FlatList data={imgs} numColumns={3} scrollEnabled={false} renderItem={({item})=><Image source={{uri:item}} style={s.tile}/>} keyExtractor={x=>x}/>
  </ScrollView>
  <View style={s.bottom}>
   <Image source={{uri:avatar}} style={s.bottomAvatar}/><Ionicons name="search-outline" size={34} color="#fff"/><View style={s.dm}><Ionicons name="paper-plane-outline" size={33} color="#fff"/><View style={s.dot}/></View><Ionicons name="play-circle-outline" size={34} color="#fff"/><Ionicons name="home-outline" size={36} color="#fff"/>
  </View>
  <Modal visible={edit} animationType="slide" transparent><View style={s.modal}><View style={s.sheet}><View style={s.modalHead}><Text style={s.modalTitle}>ویرایش نمایه</Text><Pressable onPress={()=>setEdit(false)}><Text style={s.close}>×</Text></Pressable></View>
   <TextInput value={username} onChangeText={setUsername} placeholder="نام کاربری" placeholderTextColor="#888" style={s.input}/><TextInput value={avatar} onChangeText={setAvatar} placeholder="لینک عکس پروفایل" placeholderTextColor="#888" style={s.input}/><TextInput value={bio} onChangeText={setBio} placeholder="بیو" placeholderTextColor="#888" multiline style={[s.input,s.multi]}/><TextInput value={link} onChangeText={setLink} placeholder="لینک" placeholderTextColor="#888" style={s.input}/><View style={s.row}><Text style={s.label}>حساب حرفه‌ای</Text><Switch value={pro} onValueChange={setPro}/></View><Pressable style={s.save} onPress={()=>setEdit(false)}><Text style={s.saveText}>ذخیره</Text></Pressable>
  </View></View></Modal>
 </View>
}
const s=StyleSheet.create({
root:{flex:1,backgroundColor:BG,paddingTop:8},header:{height:70,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20},center:{flexDirection:"row",alignItems:"center",gap:7},username:{fontSize:28,fontWeight:"800",color:"#fff"},profileTop:{flexDirection:"row-reverse",alignItems:"flex-start",paddingHorizontal:22,paddingTop:12},avatarWrap:{width:112,alignItems:"center",marginLeft:12},avatar:{width:92,height:92,borderRadius:46,borderWidth:2,borderColor:"#4d535c"},plus:{position:"absolute",left:5,top:68,width:31,height:31,borderRadius:16,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},plusText:{fontSize:25,color:"#111",lineHeight:28},avatarLabel:{color:MUTED,fontSize:16,marginTop:7},stats:{flex:1,flexDirection:"row",justifyContent:"space-around",paddingTop:13},stat:{color:"#ddd",textAlign:"center",fontSize:15,lineHeight:26},num:{color:"#fff",fontSize:17,fontWeight:"800"},bio:{paddingHorizontal:28,paddingTop:4,alignItems:"flex-end"},bioText:{color:"#fff",fontSize:17,lineHeight:29,textAlign:"right"},link:{color:"#91a9ff",fontSize:17,marginTop:3},dashboard:{marginHorizontal:24,marginTop:15,backgroundColor:CARD,borderRadius:13,padding:14,alignItems:"flex-end"},dashTitle:{color:"#fff",fontSize:18,fontWeight:"700"},dashSub:{color:"#8e949c",fontSize:13,marginTop:4},actions:{flexDirection:"row",gap:12,paddingHorizontal:24,paddingTop:16},button:{flex:1,height:48,backgroundColor:CARD,borderRadius:12,alignItems:"center",justifyContent:"center"},buttonText:{color:"#fff",fontSize:17,fontWeight:"700"},highlights:{paddingHorizontal:24,paddingTop:24,paddingBottom:16,gap:25,flexDirection:"row"},highlight:{width:88,alignItems:"center"},highlightImg:{width:84,height:84,borderRadius:42,borderWidth:3,borderColor:"#343a42"},newCircle:{width:84,height:84,borderRadius:42,borderWidth:1,borderColor:"#e8e8e8",alignItems:"center",justifyContent:"center"},highlightText:{color:"#fff",fontSize:14,marginTop:7},tabs:{height:66,borderBottomWidth:1,borderBottomColor:"#252a30",borderTopWidth:1,borderTopColor:"#252a30",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},tab:{width:"33.33%",height:66,alignItems:"center",justifyContent:"center"},tabActive:{width:"33.33%",height:66,alignItems:"center",justifyContent:"center",borderBottomWidth:3,borderBottomColor:"#fff"},tile:{width:"33.333%",aspectRatio:1,borderWidth:1,borderColor:BG},bottom:{height:72,backgroundColor:BG,borderTopWidth:1,borderTopColor:"#252a30",flexDirection:"row",alignItems:"center",justifyContent:"space-around"},bottomAvatar:{width:38,height:38,borderRadius:19,borderWidth:2,borderColor:"#fff"},dm:{position:"relative"},dot:{position:"absolute",width:9,height:9,borderRadius:5,backgroundColor:"#ff1744",right:-2,top:-1},modal:{flex:1,backgroundColor:"rgba(0,0,0,.55)",justifyContent:"flex-end"},sheet:{backgroundColor:"#20242a",borderTopLeftRadius:22,borderTopRightRadius:22,padding:20,paddingBottom:35},modalHead:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:14},modalTitle:{fontSize:20,fontWeight:"800",color:"#fff"},close:{fontSize:32,color:"#fff"},input:{height:46,borderWidth:1,borderColor:"#444b54",borderRadius:10,paddingHorizontal:12,marginBottom:10,color:"#fff",backgroundColor:"#171a1f",textAlign:"right"},multi:{height:110,textAlignVertical:"top",paddingTop:12},row:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:8},label:{fontWeight:"600",color:"#fff"},save:{height:46,borderRadius:10,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",marginTop:10},saveText:{color:"#111",fontWeight:"800"}
});
