#include <EEPROM.h>

const int chunkSize = 10;  // Adjust based on your chunk size

void receive_data_from_pc() {
  Serial.begin(2400);  // Set your baud rate
  while (!Serial);

  int address = 0;
  while (true) {
    if (Serial.available() > 0) {
      byte data[chunkSize];
      Serial.readBytes(data, chunkSize);
      for (int i = 0; i < chunkSize; i++) {
        EEPROM.write(address + i, data[i]);
      }
      address += chunkSize;
      delay(100);  // Adjust delay if needed
    }
  }
}

void send_data_to_pc() {
  Serial.begin(2400);  // Set your baud rate
  while (!Serial);

  int address = 0;
  while (true) {
    byte data[chunkSize];
    for (int i = 0; i < chunkSize; i++) {
      data[i] = EEPROM.read(address + i);
    }
    Serial.write(data, chunkSize);
    address += chunkSize;
    delay(100);  // Adjust delay if needed
  }
}

void setup() {
  // Your setup code here
}

void loop() {
  // Your loop code here
}