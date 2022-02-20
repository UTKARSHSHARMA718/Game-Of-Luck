import React, {useEffect, useState} from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import DiceImages1 from './assets/dice1.png';
import DiceImages2 from './assets/dice2.png';
import DiceImages3 from './assets/dice3.png';
import DiceImages4 from './assets/dice4.png';
import DiceImages5 from './assets/dice5.png';
import DiceImages6 from './assets/dice6.png';

const App = () => {
  //! difing a state for dice image.
  const [DiceImages, setDiceImages] = useState(DiceImages2);

  const [DiceImages2nd, setDiceImages2nd] = useState(DiceImages2);
  const [won, setWon] = useState(false);
  
  useEffect(()=>{
    if(DiceImages === DiceImages2nd){
       console.log("YOU WON")
       setWon(true)
    }else{
      setWon(false);
    }
    
  },[DiceImages,DiceImages2nd]);
  //! difing a method for dice image changing.
  const DiceImageChanger = () => {
    let ImageNumber = Math.floor(Math.random() * 6) + 1;
    DiceImageChanger2();
    switch (ImageNumber) {
      case 1:
        setDiceImages(DiceImages1);
        break;
      case 2:
        setDiceImages(DiceImages2);
        break;
      case 3:
        setDiceImages(DiceImages3);
        break;
      case 4:
        setDiceImages(DiceImages4);
        break;
      case 5:
        setDiceImages(DiceImages5);
        break;
      case 6:
        setDiceImages(DiceImages6);
        break;
    }

  };

  //! Assignment.
  const DiceImageChanger2 = () => {
    let ImageNumber2 = Math.floor(Math.random() * 6) + 1;

    switch (ImageNumber2) {
      case 1:
        setDiceImages2nd(DiceImages1);
        break;
      case 2:
        setDiceImages2nd(DiceImages2);
        break;
      case 3:
        setDiceImages2nd(DiceImages3);
        break;
      case 4:
        setDiceImages2nd(DiceImages4);
        break;
      case 5:
        setDiceImages2nd(DiceImages5);
        break;
      case 6:
        setDiceImages2nd(DiceImages6);
        break;
    }
  };

  return (
    <>
      <View style={styles.conatiner}>
        <Text style={won ? styles.textHead:styles.textHead1}>{won ?'Wow You Won':'Try your luck'}</Text>
        <TouchableOpacity style={styles.PlayButton}>
          <Image style={styles.images} source={DiceImages} />
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.PlayButton} onPress={DiceImageChanger2}> */}
        <TouchableOpacity style={styles.PlayButton} >
          <Image style={styles.images} source={DiceImages2nd} />
          {/* <Text style={styles.text}>Play</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={DiceImageChanger} >
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#808eff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textHead: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textHead1: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  PlayButton: {
    marginTop: 25,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'yellow',
  },
  images: {
    width: 200,
    height: 200,
  },
});
