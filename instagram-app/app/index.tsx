import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";

const stories = [
  { name: "Your story", image: "https://i.pravatar.cc/150?img=12" },
  { name: "sara", image: "https://i.pravatar.cc/150?img=47" },
  { name: "ali", image: "https://i.pravatar.cc/150?img=33" },
  { name: "mina", image: "https://i.pravatar.cc/150?img=5" },
  { name: "reza", image: "https://i.pravatar.cc/150?img=11" }
];

const posts = [
  { user: "sara.design", avatar: "https://i.pravatar.cc/150?img=47", image: "https://picsum.photos/id/1011/900/900", likes: "12,482", caption: "A quiet place to reset." },
  { user: "ali.visuals", avatar: "https://i.pravatar.cc/150?img=33", image: "https://picsum.photos/id/1015/900/900", likes: "8,931", caption: "Golden hour." }
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.wordmark}>Instagram</Text>
        <View style={styles.headerActions}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>⌁</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stories}>
          {stories.map((story, i) => (
            <View key={story.name} style={styles.story}>
              <View style={[styles.storyRing, i === 0 && styles.yourStoryRing]}>
                <Image source={{ uri: story.image }} style={styles.storyImage} />
              </View>
              <Text style={styles.storyName} numberOfLines={1}>{story.name}</Text>
            </View>
          ))}
        </ScrollView>

        {posts.map((post) => (
          <View key={post.user} style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <Text style={styles.username}>{post.user}</Text>
              <Text style={styles.more}>•••</Text>
            </View>

            <Image source={{ uri: post.image }} style={styles.postImage} />

            <View style={styles.actions}>
              <View style={styles.leftActions}>
                <Pressable><Text style={styles.actionIcon}>♡</Text></Pressable>
                <Pressable><Text style={styles.actionIcon}>○</Text></Pressable>
                <Pressable><Text style={styles.actionIcon}>⌁</Text></Pressable>
              </View>
              <Pressable><Text style={styles.actionIcon}>♧</Text></Pressable>
            </View>

            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.caption}><Text style={styles.username}>{post.user}</Text> {post.caption}</Text>
            <Text style={styles.comments}>View all comments</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <Text style={styles.bottomIcon}>⌂</Text>
        <Text style={styles.bottomIcon}>⌕</Text>
        <Text style={styles.bottomIcon}>＋</Text>
        <Text style={styles.bottomIcon}>▣</Text>
        <Image source={{ uri: stories[0].image }} style={styles.bottomAvatar} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  header: { height: 58, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, borderBottomWidth: 0.5, borderBottomColor: "#e5e5e5" },
  wordmark: { fontSize: 27, fontWeight: "700", letterSpacing: -1.2, color: "#111" },
  headerActions: { flexDirection: "row", gap: 20 },
  icon: { fontSize: 28, color: "#111" },
  stories: { paddingHorizontal: 12, paddingVertical: 12, gap: 14 },
  story: { width: 68, alignItems: "center" },
  storyRing: { width: 64, height: 64, borderRadius: 32, padding: 2, backgroundColor: "#d62976" },
  yourStoryRing: { backgroundColor: "#ddd" },
  storyImage: { width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: "#fff" },
  storyName: { marginTop: 5, fontSize: 12, color: "#222" },
  post: { marginBottom: 18 },
  postHeader: { height: 54, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, gap: 10 },
  avatar: { width: 34, height: 34, borderRadius: 17 },
  username: { fontWeight: "700", color: "#111" },
  more: { marginLeft: "auto", fontWeight: "700", letterSpacing: 2 },
  postImage: { width: "100%", aspectRatio: 1 },
  actions: { height: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 12 },
  leftActions: { flexDirection: "row", gap: 18 },
  actionIcon: { fontSize: 28, color: "#111" },
  likes: { paddingHorizontal: 12, fontWeight: "700", marginBottom: 5 },
  caption: { paddingHorizontal: 12, lineHeight: 20 },
  comments: { paddingHorizontal: 12, marginTop: 5, color: "#737373" },
  bottomBar: { height: 58, borderTopWidth: 0.5, borderTopColor: "#ddd", flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff" },
  bottomIcon: { fontSize: 27, color: "#111" },
  bottomAvatar: { width: 26, height: 26, borderRadius: 13 }
});
