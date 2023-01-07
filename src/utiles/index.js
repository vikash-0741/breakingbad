import axios from 'axios';

function ApiCall(props) {
  const {url, method} = props;
  return axios({
    url: url,
    method: method,
  })
    .then(res => {
      const {data} = res;
      return data;
    })
    .catch(err => {
      return err;
    });
}

export default ApiCall;
