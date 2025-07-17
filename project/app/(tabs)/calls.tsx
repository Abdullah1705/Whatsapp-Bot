import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Search, MoveVertical as MoreVertical, Link, Phone, Video, PhoneMissed, PhoneIncoming, PhoneOutgoing } from 'lucide-react-native';

const CallItem = ({ name, time, avatar, type, callType }: any) => {
  const getCallIcon = () => {
    switch (type) {
      case 'missed':
        return <PhoneMissed size={20} color="#FF6B6B" />;
      case 'incoming':
        return <PhoneIncoming size={20} color="#25D366" />;
      case 'outgoing':
        return <PhoneOutgoing size={20} color="#25D366" />;
      default:
        return <PhoneOutgoing size={20} color="#25D366" />;
    }
  };

  return (
    <TouchableOpacity style={styles.callItem}>
      <View style={[styles.avatar, { backgroundColor: avatar }]}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>
      <View style={styles.callContent}>
        <Text style={styles.callName}>{name}</Text>
        <View style={styles.callInfo}>
          {getCallIcon()}
          <Text style={styles.callTime}>{time}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.callButton}>
        {callType === 'video' ? (
          <Video size={20} color="#128C7E" />
        ) : (
          <Phone size={20} color="#128C7E" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const calls = [
  { name: 'Elon Musk', time: 'Today, 19:32', avatar: '#FF6B6B', type: 'outgoing', callType: 'video' },
  { name: 'Bill Gates', time: 'Today, 18:13', avatar: '#4ECDC4', type: 'outgoing', callType: 'voice' },
  { name: '+92 3576412343', time: 'Today, 17:52', avatar: '#ccc', type: 'missed', callType: 'voice' },
  { name: 'Tom Cruise', time: 'Today, 16:22', avatar: '#45B7D1', type: 'incoming', callType: 'video' },
  { name: 'Areeka Haq', time: 'Today, 15:49', avatar: '#96CEB4', type: 'incoming', callType: 'video' },
  { name: 'Imran Khan', time: 'Today, 14:32', avatar: '#FFEAA7', type: 'outgoing', callType: 'voice' },
  { name: 'Babar Azam', time: 'Today, 13:32', avatar: '#DDA0DD', type: 'missed', callType: 'voice' },
];

export default function CallsScreen() {
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

      <ScrollView style={styles.callsList} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.createCallLink}>
          <View style={styles.linkIcon}>
            <Link size={24} color="#fff" />
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkTitle}>Create call link</Text>
            <Text style={styles.linkSubtitle}>Share a link for your WhatsApp call</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent</Text>
        </View>

        {calls.map((call, index) => (
          <CallItem key={index} {...call} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Phone size={24} color="#fff" />
      </TouchableOpacity>
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
  callsList: {
    flex: 1,
  },
  createCallLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  linkIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  linkContent: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  linkSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  callContent: {
    flex: 1,
  },
  callName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  callInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  callTime: {
    fontSize: 13,
    color: '#666',
  },
  callButton: {
    padding: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});