import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Phone, Video, MoveVertical as MoreVertical, Send, Smile, Paperclip, Camera } from 'lucide-react-native';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const MessageBubble = ({ message, sender }: { message: string; sender: 'user' | 'bot' }) => (
  <View style={[styles.messageBubble, sender === 'user' ? styles.userMessage : styles.botMessage]}>
    <Text style={[styles.messageText, sender === 'user' ? styles.userMessageText : styles.botMessageText]}>
      {message}
    </Text>
    <Text style={[styles.messageTime, sender === 'user' ? styles.userMessageTime : styles.botMessageTime]}>
      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </Text>
  </View>
);

const botResponses = [
  "Hello, I am fine. Tell me about yourself. What are you doing these days?",
  "That sounds interesting! How can I help you today?",
  "I'm a bot designed to help with various tasks. What would you like to know?",
  "Thanks for sharing! Is there anything specific you'd like to discuss?",
  "I'm here to assist you. Feel free to ask me anything!",
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Initial bot message
    setMessages([
      {
        id: '1',
        text: 'Hi Abdullah! How are you?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  }, []);

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, newMessage]);
      setInputText('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponses[Math.floor(Math.random() * botResponses.length)],
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#128C7E" barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>P</Text>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Programmer</Text>
            <Text style={styles.headerStatus}>last seen today at 20:24</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Video size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Phone size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MoreVertical size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.encryptionNotice}>
        <Text style={styles.encryptionText}>
          Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
        </Text>
        <Text style={styles.encryptionLink}>Tap to learn more</Text>
      </View>

      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            sender={message.sender}
          />
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TouchableOpacity style={styles.inputIcon}>
              <Smile size={24} color="#666" />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="Message"
              placeholderTextColor="#666"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity style={styles.inputIcon}>
              <Paperclip size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputIcon}>
              <Camera size={24} color="#666" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Send size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE5DD',
  },
  header: {
    backgroundColor: '#128C7E',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerAvatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerStatus: {
    color: '#rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 8,
  },
  encryptionNotice: {
    backgroundColor: '#FFF9C4',
    margin: 16,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  encryptionText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  encryptionLink: {
    fontSize: 12,
    color: '#128C7E',
    fontWeight: '500',
    marginTop: 4,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 8,
    marginVertical: 2,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderBottomRightRadius: 2,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 2,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#000',
  },
  botMessageText: {
    color: '#000',
  },
  messageTime: {
    fontSize: 11,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  userMessageTime: {
    color: '#666',
  },
  botMessageTime: {
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    gap: 8,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputIcon: {
    marginHorizontal: 4,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginHorizontal: 8,
    maxHeight: 100,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});