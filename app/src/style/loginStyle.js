import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 24, textAlign: "center" },
  input: {
       paddingRight: 50, backgroundColor: "#fff", padding: 14, borderRadius: 10, marginBottom: 14 },
  row: { flexDirection: "row", alignItems: "center" },
  btn: { backgroundColor: "#2563eb", padding: 14, borderRadius: 12, alignItems: "center" },
  btnText: { color: "#fff", fontWeight: "600" },
  link: { textAlign: "center", marginTop: 14, color: "#2563eb" },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
});