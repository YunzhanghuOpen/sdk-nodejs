const apiUserSignTest = require('./apiUserSignTest');
const authenticationTest = require('./authenticationTest');
const bizlicgxv2h5apiTest = require('./bizlicgxv2h5apiTest');
const bizlicgxv2h5Test = require('./bizlicgxv2h5Test');
const bizlicXjjH5ApiTest = require('./bizlicXjjH5ApiTest');
const bizlicXjjH5Test = require('./bizlicXjjH5Test');
const customTest = require('./customTest');
const dataServiceTest = require('./dataServiceTest');
const h5UserSignTest = require('./h5UserSignTest');
const invoiceTest = require('./invoiceTest');
const notifyTest = require('./notifyTest');
const paymentTest = require('./paymentTest');
const taxTest = require('./taxTest');
const uploadusersignTest = require('./uploadusersignTest');
const axios = require('axios');

SdkTest()

async function SdkTest() {
    const dealer_info = await getYaml();
    
    const apiUserSignTest1 = new apiUserSignTest(dealer_info);
    const p1 = await apiUserSignTest1.Example()

    const authenticationTest1 = new authenticationTest(dealer_info);
    const p2 = await authenticationTest1.Example()

    const bizlicgxv2h5apiTest1 = new bizlicgxv2h5apiTest(dealer_info);
    const p3 = await bizlicgxv2h5apiTest1.Example()

    const bizlicgxv2h5Test1 = new bizlicgxv2h5Test(dealer_info);
    const p4 = await bizlicgxv2h5Test1.Example()

    const bizlicXjjH5ApiTest1 = new bizlicXjjH5ApiTest(dealer_info);
    const p5 = await bizlicXjjH5ApiTest1.Example()

    const bizlicXjjH5Test1 = new bizlicXjjH5Test(dealer_info);
    const p6 = await bizlicXjjH5Test1.Example()

    const customTest1 = new customTest(dealer_info);
    const p7 = await customTest1.Example()

    const dataServiceTest1 = new dataServiceTest(dealer_info);
    const p8 = await dataServiceTest1.Example()

    const h5UserSignTest1 = new h5UserSignTest(dealer_info);
    const p9 = await h5UserSignTest1.Example()

    const invoiceTest1 = new invoiceTest(dealer_info);
    const p10 = await invoiceTest1.Example()

    const notifyTest1 = new notifyTest(dealer_info);
    const p11 = await notifyTest1.Example()

    const paymentTest1 = new paymentTest(dealer_info);
    const p12 = await paymentTest1.Example()

    const taxTest1 = new taxTest(dealer_info);
    const p13 = await taxTest1.Example()

    const uploadusersignTest1 = new uploadusersignTest(dealer_info);
    const p14 = await uploadusersignTest1.Example()

    const params = [...p1,...p2,...p3,...p4,...p5,...p6,...p7,...p8,...p9,...p10,...p11,...p12,...p13,...p14]
    run_id = 'NodejsSdkTest-' + Date.now().toString()
    params.forEach(item => {
        item.run_id = run_id
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
        key: 'Nodejs'
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

