import { response } from "express";
import { Injectable } from "@nestjs/common";
import { ODRClientDTO } from "./dto/odr.dto";
import { BPP_ID, BPP_URI } from "../common/constants";
import { ODRApiInterface } from "./odr-api.interface";
import * as CancelResponse from "./response/cancel.response.json";
import * as SearchResponse from "./response/search.response.json";
import * as SelectResponse from "./response/select.response.json";
import * as ConfirmResponse from "./response/confirm.response.json";
import * as RatingResponse from "./response/rating.response.json";
import * as SupportResponse from "./response/support.response.json";
import * as TrackResponse from "./response/track.response.json";
import * as InitConsentResponse from "./response/init-consent-form.response.json";
import * as InitDisputeResponse from "./response/init-dispute-details.response.json";
import * as InitRespondentResponse from "./response/init-respondent.response.json";
import * as StatusCompletedResponse from "./response/status-completed.response.json";
import * as StatusInProgressPaymentResponse from "./response/status-in-progress-payment-after-hearing.response.json";
import * as StatusInProgressResponse from "./response/status-in-progress.response.json";
import * as UpdateAgentResponse from "./response/update-agent.response.json";
import * as UpdateHearingDateResponse from "./response/update-hearing-date.response.json";
import { v4 as uuid_v4 } from "uuid";

@Injectable()
export class ODRService implements ODRApiInterface {
    search = (odrRequest: ODRClientDTO) => {
        SearchResponse.context.bpp_id = BPP_ID;
        SearchResponse.context.bpp_uri = BPP_URI;
        SearchResponse.context.bap_id = odrRequest.context.bap_id;
        SearchResponse.context.bap_uri = odrRequest.context.bap_uri;
        return SearchResponse;
    };
    select = (odrRequest: ODRClientDTO) => {
        console.log("In Select Request");
        SelectResponse.context.bpp_id = BPP_ID;
        SelectResponse.context.bpp_uri = BPP_URI;
        SelectResponse.context.bap_id = odrRequest.context.bap_id;
        SelectResponse.context.bap_uri = odrRequest.context.bap_uri;
        return SelectResponse;
    };
    init = (odrRequest: ODRClientDTO) => {
        const { message } = odrRequest;
        console.log("In Init Request");
        const initConsent = message?.order?.tags?.find(tag => tag?.descriptor?.name === "consent-form");
        const initDispute = message?.order?.tags?.find(tag => tag?.descriptor?.name === "dispute-details");
        const initRespondent = message?.order?.tags?.find(tag => tag?.descriptor?.name === "respondent");

        if (initConsent) {
            InitConsentResponse.context.bpp_id = BPP_ID;
            InitConsentResponse.context.bpp_uri = BPP_URI;
            InitConsentResponse.context.bap_id = odrRequest.context.bap_id;
            InitConsentResponse.context.bap_uri = odrRequest.context.bap_uri;
            return InitConsentResponse;
        }
        if (initDispute) {
            InitDisputeResponse.context.bpp_id = BPP_ID;
            InitDisputeResponse.context.bpp_uri = BPP_URI;
            InitDisputeResponse.context.bap_id = odrRequest.context.bap_id;
            InitDisputeResponse.context.bap_uri = odrRequest.context.bap_uri;
            return InitDisputeResponse;
        }
        if (initRespondent) {
            InitRespondentResponse.context.bpp_id = BPP_ID;
            InitRespondentResponse.context.bpp_uri = BPP_URI;
            InitRespondentResponse.context.bap_id = odrRequest.context.bap_id;
            InitRespondentResponse.context.bap_uri = odrRequest.context.bap_uri;
            return InitRespondentResponse;
        }
    };
    confirm = (odrRequest: ODRClientDTO) => {
        console.log("In Confirm Request");
        ConfirmResponse.context.bpp_id = BPP_ID;
        ConfirmResponse.context.bpp_uri = BPP_URI;
        ConfirmResponse.context.bap_id = odrRequest.context.bap_id;
        ConfirmResponse.context.bap_uri = odrRequest.context.bap_uri;
        ConfirmResponse.message.order.id = uuid_v4();
        return ConfirmResponse;
    };
    status = (odrRequest: ODRClientDTO) => {
        console.log("In Status Request");
        const { context } = odrRequest;
        const statusCompleted = context?.key === "completed";
        const statusInProgressPayment = context?.key === "in-progress-payment-after-hearing";
        const statusInProgress = context?.key === "in-progress";

        if (statusCompleted) {
            StatusCompletedResponse.context.bpp_id = BPP_ID;
            StatusCompletedResponse.context.bpp_uri = BPP_URI;
            StatusCompletedResponse.context.bap_id = odrRequest.context.bap_id;
            StatusCompletedResponse.context.bap_uri = odrRequest.context.bap_uri;
            StatusCompletedResponse.message.order.id = odrRequest?.message?.order_id;
            return StatusCompletedResponse;
        }
        if (statusInProgressPayment) {
            StatusInProgressPaymentResponse.context.bpp_id = BPP_ID;
            StatusInProgressPaymentResponse.context.bpp_uri = BPP_URI;
            StatusInProgressPaymentResponse.context.bap_id = odrRequest.context.bap_id;
            StatusInProgressPaymentResponse.context.bap_uri = odrRequest.context.bap_uri;
            StatusInProgressPaymentResponse.message.order.id = odrRequest?.message?.order_id;

            return StatusInProgressPaymentResponse;
        }
        if (statusInProgress) {
            StatusInProgressResponse.context.bpp_id = BPP_ID;
            StatusInProgressResponse.context.bpp_uri = BPP_URI;
            StatusInProgressResponse.context.bap_id = odrRequest.context.bap_id;
            StatusInProgressResponse.context.bap_uri = odrRequest.context.bap_uri;
            StatusInProgressResponse.message.order.id = odrRequest?.message?.order_id;

            return StatusInProgressResponse;
        }
    };
    cancel = (odrRequest: ODRClientDTO) => {
        CancelResponse.context.bpp_id = BPP_ID;
        CancelResponse.context.bpp_uri = BPP_URI;
        CancelResponse.context.bap_id = odrRequest.context.bap_id;
        CancelResponse.context.bap_uri = odrRequest.context.bap_uri;
        return CancelResponse;
    };
    support = (odrRequest: ODRClientDTO) => {
        SupportResponse.context.bpp_id = BPP_ID;
        SupportResponse.context.bpp_uri = BPP_URI;
        SupportResponse.context.bap_id = odrRequest.context.bap_id;
        SupportResponse.context.bap_uri = odrRequest.context.bap_uri;
        return SupportResponse;
    };
    rating = (odrRequest: ODRClientDTO) => {
        RatingResponse.context.bpp_id = BPP_ID;
        RatingResponse.context.bpp_uri = BPP_URI;
        RatingResponse.context.bap_id = odrRequest.context.bap_id;
        RatingResponse.context.bap_uri = odrRequest.context.bap_uri;
        return RatingResponse;
    };
    update = (odrRequest: ODRClientDTO) => {
        const { message } = odrRequest;
        const updateAgent = message?.order?.tags?.find(tag => tag?.descriptor?.name === "agent");
        const updateHearingDate = message?.order?.tags?.find(tag => tag?.descriptor?.name === "hearing-date");
        if (updateAgent) {
            UpdateAgentResponse.context.bpp_id = BPP_ID;
            UpdateAgentResponse.context.bpp_uri = BPP_URI;
            UpdateAgentResponse.context.bap_id = odrRequest.context.bap_id;
            UpdateAgentResponse.context.bap_uri = odrRequest.context.bap_uri;
            return UpdateAgentResponse;
        }
        if (updateHearingDate) {
            UpdateHearingDateResponse.context.bpp_id = BPP_ID;
            UpdateHearingDateResponse.context.bpp_uri = BPP_URI;
            UpdateHearingDateResponse.context.bap_id = odrRequest.context.bap_id;
            UpdateHearingDateResponse.context.bap_uri = odrRequest.context.bap_uri;
            return UpdateHearingDateResponse;
        }
    };
    track = (odrRequest: ODRClientDTO) => {
        TrackResponse.context.bpp_id = BPP_ID;
        TrackResponse.context.bpp_uri = BPP_URI;
        TrackResponse.context.bap_id = odrRequest.context.bap_id;
        TrackResponse.context.bap_uri = odrRequest.context.bap_uri;
        return TrackResponse;
    };
}
