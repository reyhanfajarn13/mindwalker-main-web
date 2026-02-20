export const healthService = {
  getHealth() {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    };
  }
};
