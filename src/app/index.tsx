import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  Vibration,
  View,
} from "react-native";

const Separator = () => (
  <View style={Platform.OS === "android" ? styles.separator : undefined} />
);

function getMobileSystemName() {
  switch (Platform.OS) {
    case "android":
      return "Android";
    case "ios":
      return "iOS";
    case "web":
      return "Web";
    default:
      return Platform.OS;
  }
}

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === "android"
      ? "Aguarda 1s, vibra 2s, aguarda 3s"
      : "Aguarda 1s, vibra, aguarda 2s, vibra, aguarda 3s";

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Meu primeiro aplicativo React Native 🤓</Text>

      <Text style={{ marginBottom: 15 }}>Olá, mundo!</Text>

      {/* Primeira linha */}
      <View style={styles.row}>
        <View style={styles.box1}>
          <Text style={styles.whiteText}>Flex: 1</Text>
        </View>

        <View style={styles.box2}>
          <Text>Flex: 2</Text>
        </View>

        <View style={styles.box3}>
          <Text>Flex: 3</Text>
        </View>

        <View style={styles.box4}>
          <Text style={styles.whiteText}>Flex: 4</Text>
        </View>
      </View>

      {/* Segunda linha */}
      <View style={[styles.row, { marginTop: 10 }]}>
        <View style={styles.box0} />
        <View style={styles.box1} />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box1} />
        <View style={styles.box3} />
        <View style={styles.box1} />
      </View>

      {/* Input */}
      <TextInput
        placeholder="Digite alguma coisa..."
        style={[styles.input, { width: width * 0.8 }]}
      />

      {/* Debug */}
      <View style={styles.debugBox}>
        <Text style={styles.debugTitle}>👮‍♂️ Debug 👮‍♂️</Text>

        <Text>Width: {Math.round(width)}</Text>
        <Text>Height: {Math.round(height)}</Text>
        <Text>TV: {Platform.isTV ? "Sim" : "Não"}</Text>
        <Text>Sistema: {getMobileSystemName()}</Text>
        <Text>Platform.OS: {Platform.OS}</Text>
        <Text>Versão: {Platform.Version?.toString()}</Text>
      </View>

      <View style={styles.separatorLine} />

      {/* Vibração */}
      <Text style={styles.header}>Vibration API</Text>

      <Button title="Vibrar uma vez" onPress={() => Vibration.vibrate()} />

      <Separator />

      {Platform.OS === "android" && (
        <>
          <Button
            title="Vibrar por 10 segundos"
            onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
          />

          <Separator />
        </>
      )}

      <Text style={styles.paragraph}>Padrão: {PATTERN_DESC}</Text>

      <Button
        title="Vibrar com padrão"
        onPress={() => Vibration.vibrate(PATTERN)}
      />

      <Separator />

      <Button
        title="Repetir padrão"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />

      <Separator />

      <Button
        title="Parar vibração"
        color="#FF0000"
        onPress={() => Vibration.cancel()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "palegreen",
    flexGrow: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    marginBottom: 5,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 15,
  },

  whiteText: {
    color: "white",
  },

  box0: {
    flex: 1,
    height: 75,
    backgroundColor: "transparent",
  },

  box1: {
    flex: 1,
    height: 75,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  box2: {
    flex: 2,
    height: 75,
    backgroundColor: "#ff4d4d",
    justifyContent: "center",
    alignItems: "center",
  },

  box3: {
    flex: 3,
    height: 75,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },

  box4: {
    flex: 4,
    height: 75,
    backgroundColor: "#0066ff",
    justifyContent: "center",
    alignItems: "center",
  },

  debugBox: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "rgba(255,192,203,0.5)",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    padding: 12,
  },

  debugTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  separatorLine: {
    width: "95%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 25,
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  paragraph: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 16,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#777",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
});
