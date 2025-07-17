import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, Search, MoveVertical as MoreVertical, Plus } from 'lucide-react-native';

const StatusItem = ({ name, time, avatar, viewed = false }: any) => (
  <TouchableOpacity style={styles.statusItem}>
    <View style={[styles.statusAvatar, { backgroundColor: avatar }]}>
      <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      {!viewed && <View style={styles.statusRing} />}
    </View>
    <View style={styles.statusContent}>
      <Text style={styles.statusName}>{name}</Text>
      <Text style={styles.statusTime}>{time}</Text>
    </View>
  </TouchableOpacity>
);

const recentUpdates = [
  { name: 'Hamza', time: 'Today, 12:32', avatar: '#FF6B6B' },
  { name: 'Ahmad Anwer', time: 'Today, 11:02', avatar: '#4ECDC4' },
  { name: 'Ali Shahid', time: 'Today, 10:12', avatar: '#45B7D1' },
];

const viewedUpdates = [
  { name: 'Awais', time: 'Today, 09:32', avatar: '#96CEB4', viewed: true },
  { name: 'Hammad', time: 'Today, 08:56', avatar: '#FFEAA7', viewed: true },
  { name: 'Abdullah', time: 'Today, 00:12', avatar: '#DDA0DD', viewed: true },
];

export default function StatusScreen() {
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

      <ScrollView style={styles.statusList} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.myStatusItem}>
          <View style={styles.myStatusAvatar}>
            <Text style={styles.avatarText}>M</Text>
            <View style={styles.addIcon}>
              <Plus size={16} color="#fff" />
            </View>
          </View>
          <View style={styles.statusContent}>
            <Text style={styles.statusName}>My Status</Text>
            <Text style={styles.statusSubtitle}>Tap to add status update</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent updates</Text>
        </View>

        {recentUpdates.map((status, index) => (
          <StatusItem key={index} {...status} />
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Viewed updates</Text>
        </View>

        {viewedUpdates.map((status, index) => (
          <StatusItem key={index} {...status} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Camera size={24} color="#fff" />
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
  statusList: {
    flex: 1,
  },
  myStatusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  myStatusAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#45B7D1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  addIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  statusAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  statusRing: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#25D366',
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContent: {
    flex: 1,
  },
  statusName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  statusTime: {
    fontSize: 13,
    color: '#666',
  },
  statusSubtitle: {
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