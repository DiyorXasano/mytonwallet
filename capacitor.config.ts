import type { CapacitorConfig } from '@capacitor/cli';

const { APP_ENV = 'production' } = process.env;

const config: CapacitorConfig = {
  appId: 'org.mytonwallet.app',
  appName: 'MyTonWallet',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    hostname: 'mytonwallet.local',
  },
  android: {
    path: 'mobile/android',
    includePlugins: [
      '@capacitor-community/bluetooth-le',
      '@capacitor-mlkit/barcode-scanning',
      '@capacitor/app',
      '@capacitor/filesystem',
      '@capacitor/clipboard',
      '@capacitor/share',
      '@capacitor/haptics',
      '@capgo/capacitor-native-biometric',
      '@capgo/native-audio',
      '@mauricewegner/capacitor-navigation-bar',
      '@sina_kh/mtw-capacitor-status-bar',
      'capacitor-native-settings',
      'capacitor-plugin-safe-area',
      'cordova-plugin-inappbrowser',
      'mtw-capacitor-usb-hid',
      'native-dialog',
      'native-bottom-sheet',
      'capacitor-secure-storage-plugin',
      '@capacitor/app-launcher',
    ],
    webContentsDebuggingEnabled: APP_ENV !== 'production',
  },
  ios: {
    path: 'mobile/ios',
    scheme: 'MyTonWallet',
    webContentsDebuggingEnabled: APP_ENV !== 'production',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
