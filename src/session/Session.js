import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Session({ session, focusDuration, breakDuration }) {
  
  if (!session) return 0;
const width = (() => {
  if(session.label === "Focusing") {
    return 100 - ( (session.timeRemaining / (focusDuration * 60)) * 100);
  } else {
  return 100 - ((session.timeRemaining / (breakDuration * 60)) * 100); 
  };
});
  
  const dur = session.label === "Focusing" ? focusDuration : breakDuration;
  
  return (
    <div>
      {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session.label} for {minutesToDuration(dur)} minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={width()} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${width}%` }} // TODO: Increase width % as elapsed time increases. If conditional for focus or break.
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session;