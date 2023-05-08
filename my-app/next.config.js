/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         config.node = {
//           fs: 'empty'
//         }
//       }
  
//       config.module.rules.push({
//         test: /\.(glsl|vs|fs|vert|frag)$/,
//         use: ['raw-loader'],
//         exclude: /node_modules/,
//       })
  
//       return config
//     },
//   }