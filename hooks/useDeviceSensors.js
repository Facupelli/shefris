

export const useDeviceSensors = () => {
    if ('Gyroscope' in window) {
        // The `Accelerometer` interface is supported by the browser.
        // Does the device have an accelerometer, though?
        sensor = new AbsoluteOrientationSensor({frequency: 60});
        sensor.onreading = () => model.quaternion.fromArray(sensor.quaternion);
        sensor.onerror = (event) => {
            if(event.error.name === "NotReadableError"){
                console.log('Sensor is not available');
            }
        };
      };
      sensor.start()

}