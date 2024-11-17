using System;
using System.Threading.Tasks;
using InTheHand.Bluetooth;

public class BluetoothService
{
    public async Task ScanForDevicesAsync()
    {
        Bluetooth bluetooth = Bluetooth.Default;
        if (bluetooth.IsAvailable)
        {
            Console.WriteLine("Starting device scan...");

            await foreach (var device in bluetooth.ScanForDevicesAsync())
            {
                Console.WriteLine($"Found device: {device.Name} - {device.Id}");
            }
        }
        else
        {
            Console.WriteLine("Bluetooth is not available on this device.");
        }
    }

    public async Task ConnectToDeviceAsync(BluetoothDevice device)
    {
        if (device != null)
        {
            Gatt gatt = await device.Gatt.ConnectAsync();
            if (gatt != null)
            {
                Console.WriteLine($"Connected to {device.Name}");
            }
            else
            {
                Console.WriteLine("Failed to connect to device.");
            }
        }
    }

    public async Task ReadCharacteristicAsync(BluetoothDevice device, Guid serviceUuid, Guid characteristicUuid)
    {
        var gatt = await device.Gatt.ConnectAsync();

        var service = await gatt.GetPrimaryServiceAsync(serviceUuid);
        var characteristic = await service.GetCharacteristicAsync(characteristicUuid);

        var data = await characteristic.ReadValueAsync();
        Console.WriteLine($"Data read from characteristic: {BitConverter.ToString(data)}");
    }

    public async Task WriteCharacteristicAsync(BluetoothDevice device, Guid serviceUuid, Guid characteristicUuid, byte[] data)
    {
        var gatt = await device.Gatt.ConnectAsync();

        var service = await gatt.GetPrimaryServiceAsync(serviceUuid);
        var characteristic = await service.GetCharacteristicAsync(characteristicUuid);

        await characteristic.WriteValueAsync(data);
        Console.WriteLine("Data written to characteristic.");
    }
}