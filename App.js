import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';

function QuickAccess({number, name}) {
  return (
    <View style={styles.quickCard}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.quickName}>{name}</Text>
    </View>
  );
}

function Classes({name, time, venue}) {
  return (
    <View style={styles.classCard}>
      <View>
        <Text style={styles.className}>{name}</Text>
        <Text style={styles.classTime}>{time}</Text>
      </View>

      <Text style={styles.venue}>{venue}</Text>
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.phoneContainer}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.studentName}>Student</Text>
            </View>

            <View style={styles.logo}>
              <Text style={styles.logoText}>S</Text>
            </View>
          </View>

          <View style={styles.attendanceCard}>
            <Text style={styles.sectionLabel}>Attendance</Text>

            <View style={styles.attendanceRow}>
              <Text style={styles.attendancePercentage}>84%</Text>

              <Text style={styles.semester}>
                This Semester
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Quick Access
            </Text>

            <View style={styles.quickRow}>
              <QuickAccess
                number="06"
                name="Courses"
              />

              <QuickAccess
                number="03"
                name="Tasks"
              />

              <QuickAccess
                number="02"
                name="Alerts"
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Today's Classes
            </Text>

            <View>
              <Classes
                name="React Native"
                time="10:00 AM"
                venue="Lab"
              />

              <Classes
                name="Database Systems"
                time="12:00 PM"
                venue="Room 204"
              />
            </View>
          </View>

        </ScrollView>

        <View style={styles.bottomNav}>

          <Pressable style={styles.navItem}>
            <Text style={styles.activeNavText}>
              Home
            </Text>
          </Pressable>

          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>
              Courses
            </Text>
          </Pressable>

          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>
              Attendance
            </Text>
          </Pressable>

          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>
              Profile
            </Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  phoneContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    overflow: 'hidden',
  },

  content: {
    padding: 22,
    paddingBottom: 20,
  },



  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  greeting: {
    color: '#777777',
    fontSize: 14,
    marginBottom: 6,
  },

  studentName: {
    color: '#111111',
    fontSize: 20,
    fontWeight: '700',
  },

  logo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 18,
    color: '#111111',
  },


  attendanceCard: {
    marginTop: 22,
    padding: 16,
    height: 100,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 18,
    justifyContent: 'space-between',
  },

  sectionLabel: {
    color: '#777777',
    fontSize: 13,
  },

  attendanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  attendancePercentage: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
  },

  semester: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 5,
  },

  section: {
    marginTop: 24,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111111',
    marginBottom: 14,
  },

  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quickCard: {
    width: '31%',
    height: 78,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 6,
  },

  quickName: {
    fontSize: 12,
    color: '#777777',
  },


  classCard: {
    minHeight: 70,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 13,
    marginBottom: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  className: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 6,
  },

  classTime: {
    fontSize: 12,
    color: '#777777',
  },

  venue: {
    fontSize: 12,
    color: '#777777',
  },

  bottomNav: {
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#ffffff',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeNavText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111111',
  },

  navText: {
    fontSize: 12,
    color: '#888888',
  },
});

export default App;