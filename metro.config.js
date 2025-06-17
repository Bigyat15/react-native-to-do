const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add 'cjs' extension support
config.resolver.sourceExts.push('cjs');

// Disable unstable package exports (fixes some module issues)
config.resolver.unstable_enablePackageExports = false;

// Wrap the config with nativewind support (pass input css file path)
module.exports = withNativeWind(config, {
  input: './global.css',
});

