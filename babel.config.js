module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          '@/components': './src/components',
          '@/navigation': './src/navigation',
          '@/screens': './src/screens',
          '@/assets': './src/assets',
          '@/libs': './src/libs',
          '@/types': './src/types',
          '@/utils': './src/utils',
          '@/apis': './src/apis',
          '@/hooks': './src/hooks',
          '@/stores': './src/stores',
          '@/theme': './src/theme',
          '@/svgs': './src/svgs',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
