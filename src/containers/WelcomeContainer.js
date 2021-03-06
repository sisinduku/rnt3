import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

class WelcomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Welcome to tic-tac-toe</Text>
        <Text>Please Provide your name to continue</Text>
        <TextInput style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}} placeholder="Type your name here" />
        <Button
          onPress={() => this.props.navigation.navigate('Game')}
          title="Continue to Play"
          color="#841584"
          accessibilityLabel="Lets play the game!"
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default WelcomeContainer
// export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
