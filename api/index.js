import express from "express"
import cookieParser from "cookie-parser"

import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.get("/test", (req, res) => {
  res.json("It works!")
})

app.listen(8800, () => {
  console.log("Server is running on port 8800")
})