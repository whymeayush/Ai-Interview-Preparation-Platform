const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.set("trust proxy", 1)

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.FRONTEND_URL?.replace(/\/+$/, "")
].filter(Boolean)

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, health checks)
        if (!origin) return callback(null, true)

        const normalizedOrigin = origin.replace(/\/+$/, "")
        const isAllowed = allowedOrigins.includes(normalizedOrigin) || 
                          normalizedOrigin.endsWith(".vercel.app") ||
                          normalizedOrigin.includes("localhost")

        if (isAllowed) {
            return callback(null, true)
        }
        return callback(new Error(`CORS policy: Origin ${origin} not allowed`))
    },
    credentials: true
}))

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() })
})

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app