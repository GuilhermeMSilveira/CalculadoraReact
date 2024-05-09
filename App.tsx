import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("0");

  const handlePress = (value: string) => {
    if (expression === '0') {
      setExpression(value);
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
    };
  

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("0");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <View style={styles.row}>
        <Button
          onPress={clearExpression}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444", marginLeft: 200 }]}
          labelStyle={{ color: "#fff" }}
        >
          C
        </Button>
        <Button
          onPress={() => handlePress("/")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
        >
          /
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("7")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          7
        </Button>
        <Button
          onPress={() => handlePress("8")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          8
        </Button>
        <Button
          onPress={() => handlePress("9")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          9
        </Button>
        <Button
          onPress={() => handlePress("*")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#FF9500" }]}
          labelStyle={{ color: "#fff" }}
        >
          x
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("4")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          4
        </Button>
        <Button
          onPress={() => handlePress("5")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          5
        </Button>
        <Button
          onPress={() => handlePress("6")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          6
        </Button>
        <Button
          onPress={() => handlePress("-")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#FF9500" }]}
          labelStyle={{ color: "#fff" }}
        >
          -
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("1")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          1
        </Button>
        <Button
          onPress={() => handlePress("2")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          2
        </Button>
        <Button
          onPress={() => handlePress("3")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444" }]}
          labelStyle={{ color: "#fff" }}
        >
          3
        </Button>
        <Button
          onPress={() => handlePress("+")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#FF9500" }]}
          labelStyle={{ color: "#fff" }}
        >
          +
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => handlePress("0")}
          mode="outlined"
          style={[
            styles.button,
            styles.zeroButton,
            { backgroundColor: "#444" },
          ]}
          labelStyle={{ color: "#fff" }}
        >
          0
        </Button>
        <Button
          onPress={() => handlePress(".")}
          mode="outlined"
          style={[styles.button, { backgroundColor: "#444", marginRight: 10 }]}
          labelStyle={{ color: "#fff" }}
        >
          .
        </Button>
        <Button
          onPress={calculateResult}
          mode="contained"
          style={[
            styles.button,
            
            { backgroundColor: "#FF9500", marginRight: 25 },
          ]}
          labelStyle={{ color: "#fff" }}
        >
          =
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  expression: {
    color: "#fff",
    fontSize: 40,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75 / 2,
    backgroundColor: "#888",
    marginHorizontal: 10,
    color: "#fff",
  },
  zeroButton: {
    flex: 2, // Defina a flexibilidade do botão
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75 / 2,
    backgroundColor: "#888",
    marginHorizontal: 10,
    marginLeft: 35,
  },
});

export default Calculator;
