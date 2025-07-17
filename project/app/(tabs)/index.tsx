import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Search, MoveVertical as MoreVertical } from 'lucide-react-native';

const ChatItem = ({ id, name, lastMessage, time, unreadCount, avatar }: any) => (
  <Link href={`/chat/${id}`} asChild>
    <TouchableOpacity style={styles.chatItem}>
      <View style={[styles.avatar, { backgroundColor: avatar }]}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{name}</Text>
          <Text style={styles.chatTime}>{time}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {lastMessage}
          </Text>
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  </Link>
);

const chats = [
  {
    id: '1',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#FF6B6B',
  },
  {
    id: '2',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#4ECDC4',
  },
  {
    id: '3',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#45B7D1',
  },
  {
    id: '4',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#96CEB4',
  },
  {
    id: '5',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#FFEAA7',
  },
  {
    id: '6',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#DDA0DD',
  },
  {
    id: '7',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#98D8C8',
  },
  {
    id: '8',
    name: 'Programmer',
    lastMessage: 'Hi Abd, how are you ?',
    time: '12:15',
    unreadCount: 59,
    avatar: '#F7DC6F',
  },
];

export default function ChatsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#128C7E" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Camera size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MoreVertical size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Chats</Text>
          <View style={styles.tabBadge}>
            <Text style={styles.tabBadgeText}>69</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.newCommunityItem}>
          <View style={styles.communityIcon}>
            <Text style={styles.communityIconText}>+</Text>
          </View>
          <Text style={styles.newCommunityText}>New community</Text>
        </TouchableOpacity>
        
        {chats.map((chat) => (
          <ChatItem key={chat.id} {...chat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#128C7E',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 8,
  },
  tabContainer: {
    backgroundColor: '#128C7E',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  tabBadge: {
    backgroundColor: '#25D366',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tabBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  chatList: {
    flex: 1,
  },
  newCommunityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  communityIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  communityIconText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newCommunityText: {
    fontSize: 16,
    color: '#333',
  },
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  chatTime: {
    fontSize: 12,
    color: '#666',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#25D366',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});