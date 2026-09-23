import React,{useState}from"react";import{useRouter}from"expo-router";
import{View,Text,StyleSheet,ScrollView,Image,Pressable,Modal,Dimensions,RefreshControl}from"react-native";

const {width}=Dimensions.get("window");
const stories=[["Your story","https://i.pravatar.cc/150?img=12"],["sara","https://i.pravatar.cc/150?img=47"],["ali","https://i.pravatar.cc/150?img=33"],["mina","https://i.pravatar.cc/150?img=5"],["reza","https://i.pravatar.cc/150?img=11"]];
const posts=[["sara.design","https://i.pravatar.cc/150?img=47","https://picsum.photos/id/1011/900/900","12,482","A quiet place to reset."],["ali.visuals","https://i.pravatar.cc/150?img=33","https://picsum.photos/id/1015/900/900","8,931","Golden hour."]];

export default function Home(){const router=useRouter();
 const[liked,setLiked]=useState<number[]>([]);
 const[story,setStory]=useState<number|null>(null); const[refreshing,setRefreshing]=useState(false); const refresh=()=>{setRefreshing(true);setTimeout(()=>setRefreshing(false),700)};
 const toggleLike=(i:number)=>setLiked(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i]);
 return <View style={s.safe}>
  <View style={s.header}><Text style={s.logo}>Instagram</Text><View style={s.head}><Text style={s.icon}>♡</Text><Text style={s.icon}>⌁</Text></View></View>
  <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh}/>}>
   <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.stories}>
    {stories.map((x,i)=><Pressable style={s.story} key={x[0]} onPress={()=>setStory(i)}>
      <View style={[s.ring,i===0&&s.mine]}><Image source={{uri:x[1]}} style={s.storyImg}/></View><Text style={s.storyText}>{x[0]}</Text>
    </Pressable>)}
   </ScrollView>
   {posts.map((p,i)=><View style={s.post} key={p[0]}>
    <View style={s.postHead}><Image source={{uri:p[1]}} style={s.avatar}/><Text style={s.user}>{p[0]}</Text><Text style={s.more}>•••</Text></View>
    <Pressable onDoublePress={()=>toggleLike(i)}><Image source={{uri:p[2]}} style={s.photo}/></Pressable>
    <View style={s.actions}><View style={s.left}>
      <Pressable onPress={()=>toggleLike(i)}><Text style={[s.action,liked.includes(i)&&s.liked]}>♡</Text></Pressable>
      <Pressable><Text style={s.action}>○</Text></Pressable><Pressable><Text style={s.action}>⌁</Text></Pressable>
    </View><Text style={s.action}>♧</Text></View>
    <Text style={s.likes}>{liked.includes(i)?"12,483":p[3]} likes</Text>
    <Text style={s.caption}><Text style={s.user}>{p[0]}</Text> {p[4]}</Text>
    <Text style={s.comments}>View all comments</Text>
   </View>)}
  </ScrollView>
  <Modal visible={story!==null} animationType="fade" transparent onRequestClose={()=>setStory(null)}>
   <View style={s.storyModal}><Image source={{uri:story!==null?stories[story][1]:""}} style={s.fullStory}/>
   <View style={s.storyTop}><Text style={s.storyUser}>{story!==null?stories[story][0]:""}</Text><Pressable onPress={()=>setStory(null)}><Text style={s.close}>×</Text></Pressable></View>
   </View>
  </Modal>
 </View>
}
const s=StyleSheet.create({
safe:{flex:1,backgroundColor:"#fff"},header:{height:58,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:16},logo:{fontSize:27,fontWeight:"700",color:"#111"},head:{flexDirection:"row",gap:20},icon:{fontSize:28},
stories:{padding:12,gap:14},story:{width:68,alignItems:"center"},ring:{width:64,height:64,borderRadius:32,padding:2,backgroundColor:"#d62976"},mine:{backgroundColor:"#ddd"},storyImg:{width:60,height:60,borderRadius:30,borderWidth:2,borderColor:"#fff"},storyText:{marginTop:5,fontSize:12},
post:{marginBottom:18},postHead:{height:54,flexDirection:"row",alignItems:"center",paddingHorizontal:12,gap:10},avatar:{width:34,height:34,borderRadius:17},user:{fontWeight:"700"},more:{marginLeft:"auto"},photo:{width:"100%",aspectRatio:1},actions:{height:48,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:12},left:{flexDirection:"row",gap:18},action:{fontSize:29},liked:{color:"#ed4956"},likes:{paddingHorizontal:12,fontWeight:"700"},caption:{paddingHorizontal:12,lineHeight:20},comments:{paddingHorizontal:12,marginTop:5,color:"#737373"},
storyModal:{flex:1,backgroundColor:"#000",justifyContent:"center"},fullStory:{width,height},storyTop:{position:"absolute",top:55,left:20,right:16,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},storyUser:{color:"#fff",fontSize:16,fontWeight:"700"},close:{color:"#fff",fontSize:38,fontWeight:"200"}
});