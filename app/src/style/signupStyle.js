import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 24, textAlign: "center" },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    paddingRight: 50
  },
  row: {
    justifyContent: 'center',
    flexDirection: "row", alignItems: "center", alignContent: 'center', alignSelf: 'center'
  },
  btn: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", fontWeight: "600" },
  link: { textAlign: "center", marginTop: 14, color: "#2563eb" },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
});