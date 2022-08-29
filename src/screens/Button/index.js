import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ButtonComp} from '../../components';
import colors from '../../style/colors';

const ButtonScreen = () => {
  const onClick = () => {
    console.warn('Clicked');
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}>
      <Text style={styles.heading}>
        variant{':  '}
        <Text style={styles.smallHead}>(text, contained, outlined)</Text>
      </Text>
      <ButtonComp
        label="text"
        variant="text"
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="contained"
        variant="contained" //contained is default
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="outlined"
        variant="outlined"
        containerStyle={{marginBottom: 20}}
        onClick={onClick}
      />
      <Text style={styles.heading}>
        btnStyle{':  '}
        <Text style={styles.smallHead}>
          (primary, secondary, success, warning, error, disabled)
        </Text>
      </Text>
      <ButtonComp
        label="Primary"
        variant="contained"
        btnStyle="primary" // primary is default
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="Secondary"
        variant="contained"
        btnStyle="secondary"
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="Success"
        variant="contained"
        btnStyle="success"
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="Warning"
        variant="contained"
        btnStyle="warning"
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="Error"
        variant="contained"
        btnStyle="error"
        containerStyle={{marginBottom: 10}}
        onClick={onClick}
      />
      <ButtonComp
        label="Disable"
        variant="contained"
        btnStyle="disabled"
        containerStyle={{marginBottom: 20}}
        onClick={onClick}
      />
      <Text style={styles.heading}>
        type{':  '}
        <Text style={styles.smallHead}>(loading, simple)</Text>
      </Text>
      <ButtonComp
        type="loading"
        label="Loading"
        containerStyle={{marginBottom: 10}}
      />
      <ButtonComp
        type="simple" // default is simple
        label="Simple"
        containerStyle={{marginBottom: 20}}
      />
      <Text style={styles.heading}>
        Icons{':  '}
        <Text style={styles.smallHead}>(startIcon, endIcon)</Text>
      </Text>
      <ButtonComp
        label="StartIcon"
        variant="contained"
        startIcon={style => <AntDesign name={'user'} style={style} />}
        containerStyle={{marginBottom: 10}}
      />
      <ButtonComp
        label="EndIcon"
        variant="contained"
        endIcon={style => <Feather name={'send'} style={style} />}
        containerStyle={{marginBottom: 10}}
      />
    </ScrollView>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.black,
    marginBottom: 7,
  },
  smallHead: {
    fontSize: 14,
    color: colors.black,
  },
});
