import { Injectable } from "@nestjs/common";
import axios from "axios";
import { BPP_ID, BPP_URI } from "./common/constants";

@Injectable()
export class AppService {
    async webhookService(body: any, ownAddress: string) {
        try {
            if (body.context.action.includes("on_")) {
                return;
            }
            let domainPath = "";
            if (body.context.domain.includes("financial") && !body.context.domain.includes("onest")) {
                domainPath = `financial-services`;
            } else if (body.context.domain.includes("dsep") || body.context.domain.includes("onest")) {
                domainPath = `dsep`;
            } else if (body.context.domain.includes("dent")) {
                domainPath = `dent`;
            } else if (body.context.domain.includes("dhp")) {
                domainPath = `dhp`;
            } else if (body.context.domain.includes("supply-chain-services")) {
                domainPath = `industry-4.0`;
            } else if (body.context.domain === "online-dispute-resolution:0.1.0") {
                domainPath = `odr`;
            } else if (body.context.domain.includes("mobility")) {
                domainPath = `mobility`;
            } else if (body.context.domain.includes("tourism")) {
                domainPath = `tourism`;
            } else if (body.context.domain.includes("logistics")) {
                domainPath = `logistic`;
            } else if (body.context.domain.includes("localretail:shopping")) {
                domainPath = `dsnp`;
            } else if (body.context.domain.includes("retail:CityOfLight")) {
                domainPath = `city-of-light`;
            } else if (body.context.domain.includes("retail")) {
                const default_version = "1.1.0";
                let version = default_version;
                const current_version = body?.context?.core_version;
                if (current_version) {
                    version = current_version;
                }
                domainPath = `retail/${version}`;
            } else if (body.context.domain.includes("knowledge-advisory:agrinet:vistaar")) {
                domainPath = `vistaar-advisory`;
            } else {
                return;
            }
            const fullPath = `/${domainPath}/${body.context.action}`.replace("//", "/");
            const destinationUrl = `${ownAddress}${fullPath}`;

            console.log("called", destinationUrl);
            const { data: responseData } = await axios.post(destinationUrl, body);

            if (!responseData?.context) {
                console.log(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), "Invalid response from sandbox bpp api");
                return;
            }

            responseData.context.message_id = body.context.message_id;
            responseData.context.bap_id = body.context.bap_id;
            responseData.context.bap_uri = body.context.bap_uri;
            responseData.context.transaction_id = body.context.transaction_id;
            responseData.context.domain = body.context.domain;
            responseData.context.bpp_id = BPP_ID;
            responseData.context.bpp_uri = BPP_URI;

            if (body?.context?.bpp_id) responseData.context.bpp_id = body.context.bpp_id;

            if (body?.context?.bpp_uri) responseData.context.bpp_uri = body.context.bpp_uri;

            let requestAction = null;

            switch (body.context.action) {
                case "search":
                    requestAction = "on_search";
                    break;
                case "select":
                    requestAction = "on_select";
                    break;
                case "init":
                    requestAction = "on_init";
                    break;
                case "confirm":
                    requestAction = "on_confirm";
                    break;
                case "status":
                    requestAction = "on_status";
                    break;
                case "track":
                    requestAction = "on_track";
                    break;
                case "cancel":
                    requestAction = "on_cancel";
                    break;
                case "update":
                    requestAction = "on_update";
                    break;
                case "rating":
                    requestAction = "on_rating";
                    break;
                case "support":
                    requestAction = "on_support";
                    break;
                case "get_cancellation_reasons":
                    requestAction = "cancellation_reasons";
                    break;
                case "get_rating_categories":
                    requestAction = "rating_categories";
                    break;

                default:
                    console.log(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }), "Invalid request action -> " + requestAction);
                    return;
            }

            const bppClientUrl = `${process.env.BPPCLIENTURL}/${requestAction}`;

            setTimeout(async () => {
                console.log(
                    "\n\n",
                    "-----------------------------------------------------------",
                    "\n",
                    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
                    `\n`,
                    `\n`,
                    `Making post request to: ${bppClientUrl}`,
                    `\n`,
                    `\n`,
                    `Body: ${JSON.stringify(responseData)}`,
                    `\n`,
                    "-----------------------------------------------------------",
                );
                try {
                    await axios.post(bppClientUrl, responseData);
                } catch (error: any) {
                    console.log("error=>", error.response?.data?.error?.data?.errors || error.message);
                }
            });
        } catch (err: any) {
            console.log(err);
        }
    }
}
