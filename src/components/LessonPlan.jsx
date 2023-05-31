import React, { useContext, useState } from "react";
import { ClassListContext } from "../context/ClassListContext";
import { LessonPlanContext } from "../context/LessonPlanContext";
import {
  PDFDownloadLink,
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";
import lineCalendar from "../assets/line-calendar.png";
import ShantellSansFontLight from "../assets/ShantellSansLight.ttf";
import ShantellSansFontRegular from "../assets/ShantellSans-Regular.ttf";
import blob2 from "../assets/blob2.svg";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundImage: `url(${blob2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  image: {
    marginHorizontal: 190,
    marginTop: -40,
    width: 150,
  },
  title: {
    color: "#5a7c65",
    margin: 15,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "ShantellSans",
    fontStyle: "regular",
  },
  text: {
    margin: 10,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "ShantellSans",
    fontStyle: "light",
    marginHorizontal: 20,
    display: "flex",
    flexWrap: "wrap",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  subtitle: {
    color: "#5a7c65",
    fontSize: 18,
    margin: 12,
    fontFamily: "ShantellSans",
    fontStyle: "regular",
  },
  objective: {
    margin: 10,
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "ShantellSans",
    fontStyle: "regular",
    marginHorizontal: 20,
    display: "flex",
    flexWrap: "wrap",
  },
  inlineSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const LessonPlan = () => {
  const { classList } = useContext(ClassListContext);
  const {
    handleActivities,
    activities,
    addActivity,
    lessonObjective,
    addObjective,
    wrapUp,
    addWrapUp,
    warmUp,
    addWarmUp,
  } = useContext(LessonPlanContext);
  const lastSubmittedClass = classList[classList.length - 1];
  const [generatePDF, setGeneratePDF] = useState(false);
  const today = new Date().toLocaleDateString();

  const generatePDFHandler = async () => {
    setGeneratePDF(true);

    try {
      const pdfBlob = await generatePDFBlob(); // Generate the PDF blob using a separate function
      savePDFToFirebase(pdfBlob); // Save the PDF blob to Firebase Storage
    } catch (error) {
      console.error("Error generating or saving the PDF:", error);
    }
  };

  const generatePDFBlob = () => {
    return new Promise((resolve, reject) => {
      const MyDocument = ({
        classInfo,
        activities,
        lessonObjective,
        wrapUp,
        warmUp,
      }) => (
        <Document>
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              PlanLess
            </Text>
            <Image style={styles.image} src={lineCalendar} />
            <View style={styles.inlineSpaceBetween}>
              <Text style={styles.title}>
                Class Name: {classInfo.className}
              </Text>
              <Text style={styles.title}>Level: {classInfo.level}</Text>
            </View>
            <Text style={styles.subtitle}>Lesson objectives: </Text>
            <Text style={styles.objective}>{lessonObjective}</Text>
            <Text style={styles.subtitle}>Warm Up: </Text>
            <Text style={styles.text}>{warmUp}</Text>
            {activities.map((activity, index) => (
              <>
                <Text key={index} style={styles.subtitle}>
                  Activity {index + 1}:{" "}
                </Text>
                <Text style={styles.text}>{activity}</Text>
              </>
            ))}
            <Text style={styles.subtitle}>Wrap Up: </Text>
            <Text style={styles.text}>{wrapUp}</Text>
            <Text style={styles.pageNumber} fixed>
              Planned by: {classInfo.teacherName} on {today}
            </Text>
          </Page>
        </Document>
      );

      const blobPromise = pdf(
        <MyDocument
          classInfo={lastSubmittedClass}
          activities={activities}
          lessonObjective={lessonObjective}
          wrapUp={wrapUp}
          warmUp={warmUp}
        />
      ).toBlob();

      blobPromise.then((blob) => resolve(blob)).catch((error) => reject(error));
    });
  };

  const savePDFToFirebase = (pdfBlob) => {
    const storageRef = ref(
      storage,
      `/files/${lastSubmittedClass.className}.pdf`
    );

    const uploadTask = uploadBytesResumable(storageRef, pdfBlob);

    uploadTask.on(
      "state_changed",
      (error) => {
        console.error("Error uploading the PDF:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log("PDF download URL:", url);
          })
          .catch((error) => {
            console.error("Error getting the download URL:", error);
          });
      }
    );
  };

  return (
    <>
      <div className="carousel-item bg-accent shadow-xl mb-3">
        <div className="card-body carousel-body text-base-content">
          <p>
            <span className="bold input-title">Class Name: </span>
            {lastSubmittedClass.className}
          </p>
          <p>
            <span className="bold">Level: </span>
            {lastSubmittedClass.level}
          </p>
          <p>
            <span className="bold">Start/End Date: </span>
            {lastSubmittedClass.startDate[8] +
              lastSubmittedClass.startDate[9] +
              "/" +
              lastSubmittedClass.startDate[5] +
              lastSubmittedClass.startDate[6] +
              "/" +
              lastSubmittedClass.startDate[2] +
              lastSubmittedClass.startDate[3] +
              " - " +
              lastSubmittedClass.endDate[8] +
              lastSubmittedClass.endDate[9] +
              "/" +
              lastSubmittedClass.endDate[5] +
              lastSubmittedClass.endDate[6] +
              "/" +
              lastSubmittedClass.endDate[2] +
              lastSubmittedClass.endDate[3]}
          </p>
          <p>
            <span className="bold">Schedule: </span>
            {lastSubmittedClass.checkedDays +
              " " +
              lastSubmittedClass.startTime +
              " - " +
              lastSubmittedClass.endTime}{" "}
          </p>
        </div>
      </div>

      <div className="lesson-objectives">
        <div className="form-title">Lesson Objectives:</div>
        <input
          type="text"
          placeholder="Today we are going to..."
          className="input input-bordered input-primary bg-white w-full max-w-xs mb-3"
          value={lessonObjective}
          onChange={(e) => addObjective(e.target.value)}
        />
      </div>
      <div>
        <div className="form-title">Warm up / Introduction:</div>
        <input
          type="text"
          placeholder="Introduction"
          className="input input-bordered input-primary bg-white w-full max-w-xs mb-3"
          value={warmUp}
          onChange={(e) => addWarmUp(e.target.value)}
        />
      </div>

      <div>
        <div className="form-title">Activity 1:</div>
        <textarea
          type="textarea"
          placeholder="Activity"
          className="input input-bordered input-primary bg-white w-full max-w-xs"
          value={activities[0]}
          onChange={(e) => handleActivities(0, e.target.value)}
        />
      </div>

      {activities.slice(1).map((activity, index) => (
        <div key={index}>
          <div className="form-title">Activity {index + 2}:</div>
          <textarea
            type="textarea"
            placeholder={`Activity ${index + 2}`}
            className="input input-bordered input-primary bg-white w-full max-w-xs"
            value={activity}
            onChange={(e) => handleActivities(index + 1, e.target.value)}
          />
        </div>
      ))}
      <button className="btn btn-primary mb-3 btn-sm" onClick={addActivity}>
        add activity
      </button>
      <div>
        <div className="form-title">Wrap up / Conclusion:</div>
        <input
          type="text"
          placeholder="Final activity"
          className="input input-bordered input-primary bg-white w-full max-w-xs mb-3"
          value={wrapUp}
          onChange={(e) => addWrapUp(e.target.value)}
        />
      </div>
      <div className="form-title">Add resources:</div>
      <input
        type="file"
        className="file-input file-input-primary file-input-bordered bg-white file-input-sm w-full max-w-xs mb-3"
      />
      <button className="btn btn-primary mb-3" onClick={generatePDFHandler}>
        create plan
      </button>
      {generatePDF && (
        <PDFDownloadLink
          document={
            <MyDocument
              classInfo={lastSubmittedClass}
              activities={activities}
              lessonObjective={lessonObjective}
              wrapUp={wrapUp}
              warmUp={warmUp}
              today={today}
            />
          }
          fileName={`${lastSubmittedClass.className}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

const MyDocument = ({
  classInfo,
  activities,
  lessonObjective,
  wrapUp,
  warmUp,
  today,
}) => {
  Font.register({
    family: "ShantellSans",
    fonts: [
      { src: ShantellSansFontLight, fontStyle: "light", format: "truetype" },
      {
        src: ShantellSansFontRegular,
        fontStyle: "regular",
        format: "truetype",
      },
    ],
  });
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          PlanLess
        </Text>
        <Image style={styles.image} src={lineCalendar} />
        <View style={styles.inlineSpaceBetween}>
          <Text style={styles.title}>Class Name: {classInfo.className}</Text>
          <Text style={styles.title}>Level: {classInfo.level}</Text>
        </View>
        <Text style={styles.subtitle}>Lesson objectives: </Text>
        <Text style={styles.objective}>{lessonObjective}</Text>
        <Text style={styles.subtitle}>Warm Up: </Text>
        <Text style={styles.text}>{warmUp}</Text>
        {activities.map((activity, index) => (
          <React.Fragment>
            <Text key={index} style={styles.subtitle}>
              Activity {index + 1}:{" "}
            </Text>
            <Text style={styles.text}>{activity}</Text>
          </React.Fragment>
        ))}
        <Text style={styles.subtitle}>Wrap Up: </Text>
        <Text style={styles.text}>{wrapUp}</Text>
        <Text style={styles.pageNumber} fixed>
          Planned by: {classInfo.teacherName} on {today}
        </Text>
      </Page>
    </Document>
  );
};
export default LessonPlan;
