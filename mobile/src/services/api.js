import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina (192.168.0.30)
 * Android com Emulador: locahost (adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */