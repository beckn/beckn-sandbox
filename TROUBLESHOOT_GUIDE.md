## Troubleshooting Guide

If you are receiving data from the sandbox, your setup is correct. However, if you encounter `responses` with an empty responses array as shown below, troubleshooting is required.

```json
{
    "context": {
        "domain": "mobility:ridehailing:0.8.0",
        "core_version": "0.9.4",
        "action": "search",
        "bap_id": "beckn-sandbox-bap.becknprotocol.io",
        "bap_uri": "https://sandbox-bap-network.becknprotocol.io",
        "country": "IND",
        "city": "std:080",
        "transaction_id": "7afe44fd-d947-4a0a-81bc-d286784df2c1",
        "message_id": "c914adc0-fd69-4ff0-8456-9ce2dca0cf4d",
        "ttl": "PT10M",
        "timestamp": "2023-06-01T14:11:47.339Z",
        "max_callbacks": 1
    },
    "responses": []
}
```

Suggested Possibilities:

**Possibility 1:** It is possible that any of the instances (BPP, Sandbox API) are not reachable or may not be responding.

**Solution:** Stop each instance by pressing `Ctrl+C` or `Cmd+C`, and then restart each of them. If the tunnel application is not working correctly or the apps are not properly tunneled, re-run the localtunnel or its alternative to regenerate the public URLs. Afterwards, retry the APIs from the collection and check the response.

**Possibility 2:** The `bap_id`, `bap_uri`, `bpp_id`, or `bpp_uri` may be incorrect in the request body's context.

**_Solution:_** Verify the accuracy of `bap_id`, `bap_uri`, `bpp_id`, and `bpp_uri` that you generated and registered in the Beckn registry [here](https://registry.becknprotocol.io/login).

**Possibility 3:** The domain of the BPP that you set up may be mismatched.

**_Solution:_** Search for the registered BPP in the Beckn registry and confirm the domain. If it's incorrect or empty, select the correct one from the dropdown by entering `*` in the domain field. Then retry the APIs.

**Possibility 4:** The validity of the BPP setup may have expired.

**_Solution:_** Check the registered BPP in the Beckn registry and verify the validity date. If it's expired, update the valid until date by editing the BPP in the participant info tab, and then retry the APIs.

**Possibility 5:** The `domain` passed in the context in the payload may be incorrect.

**_Solution:_** Ensure that the correct domain is provided in the context as per the requirements.

**Possibility 6:** The response from the sandbox or other BPPs is not validated by the open-api validator at the BPP client layers.

**_Solution:_** Check the logs of the BPP client layer for any error messages. If you notice errors such as:

```
Error from makeClient
(node:69193) UnhandledPromiseRejectionWarning: Error: Callback to client failed.
at /Users/shreyavishal/code/Beckn/protocol-server/bpp-client-protocol-server/src/utils/callback.utils.ts:37:13
at Generator.throw (<anonymous>)
at rejected (/Users/shreyavishal/code/Beckn/protocol-server/bpp-client-protocol-server/src/utils/callback.utils.ts:6:65)
```

A possible solution for this issue can be to verify the response from the Sandbox or BPPs by implementing console logs for the response.
These are the potential scenarios when an empty `response` array is received.
In all the above scenarios, you will observe that in the BAP network logs, only this response is provided from the gateway in the case of a search request, and no other message is logged thereafter.

```
Status: 200
Data : {"message":{"ack":{"status":"ACK"}}}
Subscriber URL: https://gateway.becknprotocol.io/bg
```

## Solutions for Other Responses Received

1. If the response appears as follows:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Error</title>
    </head>
    <body>
        <pre>
        RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code: ENOENT<br>
        &nbsp; &nbsp; at new NodeError (internal/errors.js:322:7)<br>
        &nbsp; &nbsp; at ServerResponse.writeHead (_http_server.js:259:11)<br>
        &nbsp; &nbsp; at ServerResponse._implicitHeader....
    </pre>
    </body>
</html>
```

**Solution:** It's possible that the `version` passed in the context on the BAP side is incorrect. Ensure that you pass the correct version. If you check the logs on the BAP client side, you may find this error:

```
[Error: ENOENT: no such file or directory, open 'schemas/context_1.2.0.json'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'schemas/context_1.2.0.json'
}
```

2. If the response is in this format:

```json
{
    "message": {
        "ack": {
            "status": "NACK"
        }
    },
    "error": {
        "issues": [
            ...
        ],
        "name": "ZodError"
    }
}
```

**Solution:** There is a high probability that the context passed in the payload is not valid and is rejected by the open-api validator at the BAP client layer. In the BAP client logs, you may notice an error message such as `ZodError`. The solution for this issue is to provide a proper payload to the API.
