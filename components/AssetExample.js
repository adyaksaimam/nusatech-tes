import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'white', marginBottom: 10, paddingTop: 10 }}>
          Username
        </Text>
        <TextInput style={styles.form} placeholder="Username" />
      </View>
      <View>
        <Text style={{ color: 'white', marginBottom: 10, paddingTop: 10 }}>
          Phone number
        </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.form}
          placeholder="+62 |"
        />
      </View>
      <View>
        <Text style={{ color: 'white', marginBottom: 10, paddingTop: 10 }}>
          Password number
        </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.form}
          placeholder="Password"
        />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            marginBottom: 10,
            paddingTop: 10,
            fontSize: 12,
          }}>
          Referral ID (Optional)
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'black',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
});
