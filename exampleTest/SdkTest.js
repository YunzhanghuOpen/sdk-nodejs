const apiUserSignTest = require('./apiUserSignTest');
const axios = require('axios');

SdkTest()

async function SdkTest() {
    const dealer_info = await getYaml();
    const apiUserSignTest1 = new apiUserSignTest(dealer_info);
    const p1 = await apiUserSignTest1.Example()


    const params = [...p1]
    params.forEach(item => {
        item.run_id = 'NodejsSdkTest-' + Date.now().toString();
        item.create_user = 'Nodejs-sdk'
        item.execute_user = 'Nodejs-sdk'
        item.tag = 'Nodejs-sdk'
        item.env = 'Nodejs-sdk'
      });
    insertSdkTestReport(params)
}

async function getYaml() {
    try {
      const url = 'http://bugmirror.jiesuan.zz/new/sdk/get_dealer_info';

      const data = {
        key: 'sdk'
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-yzh-env': 'bugmirror-2752'
        },
        timeout: 3000
      };

      const response = await axios.post(url, data, config);

      console.log('Response Data:', response.data);
      return response.data.sdk_dealer_info
    } catch (error) {
      console.error('Error:', error.message);
      return null
    }
  }

  async function insertSdkTestReport(data) {
    try {
      const url = 'http://bugmirror.jiesuan.zz/new/sdk/insert_sdk_result';

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-yzh-env': 'bugmirror-2752'
        },
        timeout: 3000
      };

      const response = await axios.post(url, data, config);

      console.log('Response Data:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

