import app from "./app";
import { config } from "./config";

const startServer = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`🚀 Server running at ${config.corsOrigin}`);
      console.log(`📍 Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
