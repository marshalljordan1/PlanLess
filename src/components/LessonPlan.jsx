import React, { useContext, useState } from "react";
import { ClassListContext } from "../context/ClassListContext";
import { LessonPlanContext } from "../context/LessonPlanContext";
import {
  PDFDownloadLink,
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const LessonPlan = () => {
  const { classList } = useContext(ClassListContext);
  const { handleActivities, activities, addActivity } =
    useContext(LessonPlanContext);
  const lastSubmittedClass = classList[classList.length - 1];
  const [generatePDF, setGeneratePDF] = useState(false);

  const generatePDFHandler = () => {
    setGeneratePDF(true);
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
        />
      </div>
      <div>
        <div className="form-title">Warm up / Introduction:</div>
        <input
          type="text"
          placeholder="Introduction"
          className="input input-bordered input-primary bg-white w-full max-w-xs mb-3"
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
          document={<MyDocument classInfo={lastSubmittedClass} />}
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

const MyDocument = ({ classInfo, activities }) => {
  Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  });

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      fontFamily: "Oswald",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
  });
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          PlanLess
        </Text>
        <Text style={styles.title}>Class Name: {classInfo.className}</Text>
        <Text style={styles.title}>Level: {classInfo.level}</Text>
        <Text style={styles.text}>Activity 1: {activities}</Text>
      </Page>
    </Document>
  );
};
export default LessonPlan;
