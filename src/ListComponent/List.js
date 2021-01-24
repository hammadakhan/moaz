import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {Service} from '../Config/Services';
const List = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState('');
  const detail = props.data.item.login;
  useEffect(() => {
    Service.get_detail(detail, setData);
    // console.warn('hh', detail);
  }, []);
  return (
    <View>
      <Modal transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#000000aa',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: height * 0.25,
              width: width * 0.8,
              borderRadius: 10,
              paddingVertical: 10,
              justifyContent: 'center',
              padding: 10,
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: props.data.item.avatar_url}}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  alignSelf: 'center',
                }}
              />
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginStart: 15,
                    bottom: 15,
                  }}>
                  Name:{' '}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginStart: 15,
                    bottom: 15,
                  }}>
                  Followers:{' '}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginStart: 15,
                    bottom: 15,
                  }}>
                  Following:{' '}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginStart: 15,
                    bottom: 15,
                  }}>
                  Location:
                </Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    // textAlign: 'center',
                    // alignSelf: 'center',
                    // marginStart: 15,
                    bottom: 15,
                  }}>
                  {props.data.item.login}
                </Text>
                <Text
                  style={{
                    // textAlign: 'center',
                    // alignSelf: 'center',
                    // marginStart: 15,
                    bottom: 15,
                  }}>
                  {data.followers}
                </Text>
                <Text
                  style={{
                    // textAlign: 'center',
                    // alignSelf: 'center',
                    // marginStart: 15,
                    bottom: 15,
                  }}>
                  {data.following}
                </Text>
                <Text
                  style={{
                    // textAlign: 'center',
                    // alignSelf: 'center',
                    // marginStart: 15,
                    bottom: 15,
                  }}>
                  {props.data.item.login}
                </Text>
              </View>
            </View>
            <Text
              style={{color: 'blue', textAlign: 'center'}}
              onPress={() => setVisible(false)}>
              Cancel
            </Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setVisible(true);
        }}>
        <Image
          source={{uri: props.data.item.avatar_url}}
          style={{height: 40, width: 40, borderRadius: 50, marginStart: 10}}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 10,
              color: 'black',
              fontSize: 17,
            }}>
            <Text> Name: </Text>
            <Text style={{marginStart: 10, color: 'black', fontSize: 17}}>
              {props.data.item.login}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 5,
              color: 'black',
              fontSize: 17,
            }}>
            <Text> Profile URL: </Text>
            <Text
              onPress={() => {
                Linking.openURL(props.data.item.html_url);
              }}
              style={{
                marginStart: 10,
                color: 'blue',
                fontSize: 17,
                width: width * 0.6,
              }}>
              {props.data.item.url}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: height * 0.13,
    borderRadius: 10,
    marginVertical: 10,

    flexDirection: 'row',
    width: width * 0.95,
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'center',
    borderWidth: 1,
  },
});

export default List;
