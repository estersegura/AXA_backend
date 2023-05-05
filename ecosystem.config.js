module.exports = {
    apps : [{
      name: "axa-backend",
      script: "npm",
      args : "start",
      instances: 2,
      env: {
        NODE_ENV: "DEV",
        BASE_URL: 'https://www.mocky.io/v2/',
        POLICY_ROUTE: '580891a4100000e8242b75c5',
        CLIENT_ROUTE: '5808862710000087232b75ac'
      },
      env_qa: {
        NODE_ENV: "QA",
        BASE_URL: 'https://www.mocky.io/v2/',
        POLICY_ROUTE: '580891a4100000e8242b75c5',
        CLIENT_ROUTE: '5808862710000087232b75ac'
      },
      env_uat: {
        NODE_ENV: "UAT",
        BASE_URL: 'https://www.mocky.io/v2/',
        POLICY_ROUTE: '580891a4100000e8242b75c5',
        CLIENT_ROUTE: '5808862710000087232b75ac'
      },
      env_production: {
        NODE_ENV: "PROD",
        BASE_URL: 'https://www.mocky.io/v2/',
        POLICY_ROUTE: '580891a4100000e8242b75c5',
        CLIENT_ROUTE: '5808862710000087232b75ac'
      }
    }]
  }
