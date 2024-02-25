import serial
import time

def send_data_via_uart(data, baud_rate=2400):
    with serial.Serial('COMx', baud_rate, timeout=1) as ser:  # Replace 'COMx' with your actual port
        for chunk in chunks(data, 10):  # Adjust chunk size as needed
            ser.write(chunk)
            time.sleep(0.1)  # Adjust delay if needed

def receive_data_via_uart(baud_rate=2400):
    with serial.Serial('COMx', baud_rate, timeout=1) as ser:  # Replace 'COMx' with your actual port
        received_data = b""
        while True:
            data = ser.read(10)  # Adjust read size based on your chunk size
            if not data:
                break
            received_data += data
        return received_data.decode('utf-8')

def chunks(data, size):
    for i in range(0, len(data), size):
        yield data[i:i + size]

# Example Usage
text_data = "Finance Minister Arun Jaitley Tuesday hit out at former RBI governor..."
send_data_via_uart(text_data.encode('utf-8'))
received_data = receive_data_via_uart()
print(received_data)