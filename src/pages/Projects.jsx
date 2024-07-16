// src/App.js
import React from 'react';
import Card from '../components/Card';
import Videos from '../components/Videos'

const App = () => {
  return (
    <div className="App">
      <div className="card-container">
        <Card
          title="AI Assistant"
          content="UEAB AI Assitant"
          image="./src/assets/Images/AI.png"
          github="https://github.com/danielogera/Ueab_AI-assistant.git"
        />
        <Card
          title="Notes App"
          content="Notes Web Application"
          image="./src/assets/Images/notes.png"
          github="https://github.com/danielogera/notes_application.git"
        />
        <Card
          title="Stop Watch"
          content="A stop watch Application."
          image="./src/assets/Images/stopwatch.png"
          github={"https://github.com/danielogera/stop_watch.git"}
        />
        <Card
          title={'Pdf Converter'}
          content={'File to pdf converter using python'}
          image={'./src/assets/Images/PdfConverter.png'}
          github={'https://github.com/danielogera/python_programs.git'}
        />
      </div>
      <Videos
      src={'./src/assets/videos/car.mp4'}
      title={'Capcut Video Editing'}
      description={"A car moving through a tunnel at night, did color grading, added video overlays and sound effects."}
      />
    </div>
  );
};

export default App;
