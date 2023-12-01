import cv2
from easyocr import Reader
import re

# Load the Haar Cascade classifier for license plate detection
plate_cascade = cv2.CascadeClassifier('plate_number.xml')

# Create an EasyOCR reader
reader = Reader(['en'])

# Define a regular expression pattern for valid license plates
license_plate_pattern = r'^TN [0-9]{2} [A-Z] [0-9]{4}$'

# Read the video
video_capture = cv2.VideoCapture('./public/train.mp4')

while True:
    ret, frame = video_capture.read()

    if not ret:
        break

    # Convert the frame to grayscale for plate detection
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect license plates in the frame
    plates = plate_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # Process each detected license plate
    for (x, y, w, h) in plates:
        # Extract the license plate region
        plate_region = frame[y:y+h, x:x+w]

        # Perform OCR on the license plate region using EasyOCR
        ocr_results = reader.readtext(plate_region)

        # Extract text and check against the license plate pattern
        for result in ocr_results:
            text = result[1]  # Extract the text from the result tuple

            # Check if the OCR result matches the license plate pattern
            if re.match(license_plate_pattern, text):
                cv2.putText(frame, str(text), (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

        # Draw bounding box around the license plate
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    # Display the frame with bounding boxes and OCR results
    cv2.imshow('License Plate Detection', frame)

    if cv2.waitKey(10) == 27:  # Press 'Esc' to exit
        break

video_capture.release()
cv2.destroyAllWindows()
