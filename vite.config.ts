import {defineConfig, type Plugin} from 'vite'
import react from '@vitejs/plugin-react-swc'
import url from "node:url"
import mockjs from 'mockjs'

//vite插件
const viteMockServer = (): Plugin => {
    return {
        name: 'vite-plugin-mock',
        configureServer(server) {
            // 1. 只匹配路径
            server.middlewares.use('/api/mock/list', (req, res) => {
                // 2. 解析 query
                const { query } = url.parse(req.originalUrl, true);
                const key = query.key || 'default'; // 给个兜底值

                res.setHeader('Content-Type', 'application/json');
                const data = mockjs.mock({
                    'list|2000': [{
                        id: '@guid',
                        name: key,
                        age: '@integer(18,60)',
                        address: '@county(true)',
                    }]
                });
                res.end(JSON.stringify(data));
            });
        }
    };
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),viteMockServer()],
})
