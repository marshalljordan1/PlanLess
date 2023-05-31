const Quixote = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        PlanLess
      </Text>
      <Text style={styles.title}>Class Name: Starters</Text>
      <Text style={styles.title}>Level: A1</Text>
      <Text style={styles.subtitle}>
        Lesson objectives: Today we are going to...
      </Text>
      <Text style={styles.text}>Activity 1:</Text>
      <Text style={styles.text}>Activity 1:</Text>
    </Page>
  </Document>
);

Font.register({
  family: "Orbitron",
  src: "../assets/ShantellSans-Regular.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Orbitron",
  },
  text: {
    margin: 15,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    marginHorizontal: 20,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
});

ReactPDF.render(<Quixote />);
