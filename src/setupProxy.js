const proxy = require("http-proxy-middleware")
module.exports = (app)=>{
    app.use("/api", proxy({
        target: "https://h5api.m.taobao.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))
}
