'use strict';
module.exports = {
    response: response,
    error: error,
    success: success
};

function response(res, data, msg, code){
    code = code || 200;
    var header = {
            'message': msg,
            'status': code
    }; 
    res.status(code);
    res.setHeader("api-meta", JSON.stringify(header));
    res.header('Access-Control-Expose-Headers', ['api-meta']);
    return res.json(data);
};

function error (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
function success (data) {
    console.log('Data [%s]', json.parse(data));
};