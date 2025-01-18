from ultralytics import YOLO
import cv2
import time
import numpy as np

def detect_fire(model_path, source=0, conf_threshold=0.25):  # Changed to camera 0
    # Load the YOLO model
    model = YOLO(model_path)
    
    print(f"Attempting to open camera {source}")
    cap = cv2.VideoCapture(source)
    
    if not cap.isOpened():
        print(f"Error: Could not open camera {source}")
        return

    print("Camera opened successfully!")

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Could not read frame")
            break

        results = model(frame, conf=conf_threshold)[0]
        
        for detection in results.boxes.data.tolist():
            x1, y1, x2, y2, conf, cls = detection
            
            if conf > conf_threshold:
                cv2.rectangle(frame, 
                            (int(x1), int(y1)), 
                            (int(x2), int(y2)), 
                            (0, 0, 255), 2)
                
                label = f'Fire: {conf:.2f}'
                cv2.putText(frame, label, 
                           (int(x1), int(y1 - 10)), 
                           cv2.FONT_HERSHEY_SIMPLEX, 
                           0.5, (0, 0, 255), 2)

        cv2.imshow('Fire Detection', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    MODEL_PATH = "best.pt"
    detect_fire(MODEL_PATH, source=0)  # Using camera 0