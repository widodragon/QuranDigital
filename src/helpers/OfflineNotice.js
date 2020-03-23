// class untuk memeriksa apakah perangkat terhubung dengan internet atau tidak

import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet, NetInfo } from 'react-native';
import { setConnection } from '../redux/actions/common';
import { connect } from "react-redux";

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.props.dispatch(setConnection(isConnected));
      this.setState({ isConnected });
    } else {
      this.props.dispatch(setConnection(isConnected));
      this.setState({ isConnected });
    }
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0
  },
  offlineText: { color: '#fff' }
});

const mapStateToProps = (state) => {
  return {
    isConnected: state.common
  }
}

export default connect(mapStateToProps)(OfflineNotice)