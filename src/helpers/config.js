export function checkHostName(hostname) {
  let config;

  console.log(hostname);

  if (hostname === "localhost")
    config = {
      url: "http://localhost:3001",
      device: "desktop",
      environment: "development",
      isMobile: false,
    };
  else if (/127./.test(hostname))
    config = {
      url: "http://" + hostname + ":3001",
      device: "mobile",
      environment: "development",
      isMobile: true,
    };
  else if (hostname === "mellocloud.com" || hostname === "www.mellocloud.com")
    config = {
      url: "https://api.mellocloud.com",
      device: "desktop",
      environment: "production",
      isMobile: false,
    };
  else if (hostname === "m.mellocloud.com")
    config = {
      url: "https://api.mellocloud.com",
      device: "mobile",
      environment: "production",
      isMobile: true,
    };

  return config;
}
