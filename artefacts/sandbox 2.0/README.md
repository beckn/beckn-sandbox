# Introduction

Introducing the new Postman collections for the Beckn Protocol Open Network, designed to simplify integration and testing. These collections not only streamline communication between Buyer and Provider apps (BAPs and BPPs) but also enable AI-powered catalog generation for items not available in existing BPPs. Developers can seamlessly simulate and test dynamic use cases with enhanced flexibility. Leverage this innovative toolset to elevate your network's capabilities and user experience!

## List of domains covered:

### Beckn Protocol Postman Collections

| **Domain**      | **Postman Collection URL**                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Tourism         | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/city-of-lights)     |
| City of Lights  | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/city-of-lights)     |
| DHP Diaganostic | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/DHP%20Diaganostics) |
| DHP Pharmacy    | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/DHP%20Pharmacy)     |
| Industry 4.0    | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/Industry%204.0)     |
| ODR             | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/ODR)                |
| DENT            | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/UEI%20EV)           |
| Vistaar         | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/vistaar)            |
| DSEP            | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/DSEP)               |
| Retail          | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/Retail)             |
| UEI EV          | [PC URL](https://github.com/beckn/beckn-sandbox/tree/main/artefacts/sandbox%202.0/artefects-genai/UEI%20EV)           |

## Steps to use the Postman Collection

### Step 1: Download the Postman Collection

-   Select the domain of your choice from the table above.
-   Click on the corresponding **Postman Collection URL** to download the JSON file for the domain.

### Step 2: Import the Postman Collection into Postman

1. Open the Postman app on your system.
2. Click on the **Import** button located in the top-left corner of the Postman app.
3. Select the downloaded JSON file from your system.
4. Click **Open** to import the collection.
5. The Postman collection will now be available in your Postman workspace.

### Step 3: Hit the Search API

1. Locate the **Search API** within the imported Postman collection.
2. Modify the request body to include either:
    - An existing item name for which the catalog is already present in the BPP.
    - A new item name to trigger AI-driven catalog generation for unavailable items.
3. Hit the **Send** button to execute the API request.
4. Review the response to see the results:
    - If the item exists, the catalog details will be returned.
    - For new items, the AI-generated catalog will be created in the BPP side and for this attempt the response Array will be empty
    - Now again hit the API and this time you will observe that the newly created catalog will be returned in the response array.

### Step 4: Use Response Data in Subsequent Beckn Transaction API Calls

1. From the **Search API** response, extract the following details:
    - `bpp_id`
    - `bpp_uri`
    - `item_id`
    - `provider_id`
2. Use these values in the **Select** API call to proceed with the transaction.
3. From the **Select API** response, extract the following details:
    - `fulfillment_id`
    - `provider_id`
    - `item_id`
    - `bpp_id`
    - `bpp_uri`
4. Use these extracted values in the **Init** and **Confirm** API calls to finalize the transaction.
5. For the **Status** API call, use the appropriate transaction details to check the status of the order.
   <br>
   <br>

> **Note**: You cannot search for items that are restricted for e-commerce or information exchange. This includes, but is not limited to, weapons, drugs, and content related to nudity or other prohibited materials. Such items violate legal and ethical guidelines and are strictly disallowed in the Beckn Protocol ecosystem.

<br>
<br>
<br>

# Conclusion

The Beckn Protocol Postman collections provide a comprehensive and user-friendly toolset for testing and interacting with open networks across various domains. By following the outlined steps, developers can seamlessly simulate the complete transaction lifecycle, from searching for items to confirming orders, with support for AI-driven catalog generation for unavailable items.

Please ensure adherence to legal and ethical guidelines while using the collections, avoiding restricted items during searches. These collections aim to empower developers to build scalable and innovative solutions within the Beckn ecosystem, fostering interoperability and growth.

Happy exploring and building with Beckn Protocol!
