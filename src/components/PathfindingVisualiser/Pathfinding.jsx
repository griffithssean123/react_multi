import React from "react";
import PathfindingVisualiser from './PathfindingVisualiser'

function Pathfinding() {
  return (
    <div className="pathfinding">
      <div class="container">
          <div>
            <h1 class="font-weight-light">Pathfinding Visualiser</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <PathfindingVisualiser></PathfindingVisualiser>
          </div>
      </div>
    </div>
  );
}

export default Pathfinding;
