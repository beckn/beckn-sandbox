import { Test, TestingModule } from "@nestjs/testing";
import { DHPController } from "./dhp.controller";
import { DHPService } from "./dhp.service";
import { DHPRequestDto } from "./dto/request.dto";

// mock imports for DHP:pharmacy
import * as PharmacySearchRequestJSON from "../pharmacy/request/request.search.json";
import * as PharmacySearchResponseJSON from "../pharmacy/response/response.search.json";
import * as PharmacySelectRequestJSON from "../pharmacy/request/request.select.json";
import * as PharmacySelectResponseJSON from "../pharmacy/response/response.select.json";
import * as PharmacyInitRequestJSON from "../pharmacy/request/request.init.json";
import * as PharmacyInitResponseJSON from "../pharmacy/response/response.init.json";
import * as PharmacyConfirmRequestJSON from "../pharmacy/request/request.confirm.json";
import * as PharmacyConfirmResponseJSON from "../pharmacy/response/response.confirm.json";
import * as PharmacyStatusRequestJSON from "../pharmacy/request/request.status.json";
import * as PharmacyStatusResponseJSON from "../pharmacy/response/response.status.json";
import * as PharmacyCancelRequestJSON from "../pharmacy/request/request.cancel.json";
import * as PharmacyCancelResponseJSON from "../pharmacy/response/response.cancel.json";
import * as PharmacyUpdateRequestJSON from "../pharmacy/request/request.update.json";
import * as PharmacyUpdateResponseJSON from "../pharmacy/response/response.update.json";
import * as PharmacyTrackRequestJSON from "../pharmacy/request/request.track.json";
import * as PharmacyTrackResponseJSON from "../pharmacy/response/response.track.json";
import * as PharmacySupportRequestJSON from "../pharmacy/request/request.support.json";
import * as PharmacySupportResponseJSON from "../pharmacy/response/response.support.json";
import * as PharmacyRatingRequestJSON from "../pharmacy/request/request.rating.json";
import * as PharmacyRatingResponseJSON from "../pharmacy/response/response.rating.json";

// mock imports for DHP:diagnostic
import * as DiagnosticSearchRequestJSON from "../diagnostics/request/request.search.json";
import * as DiagnosticSearchResponseJSON from "../diagnostics/response/response.search.json";
import * as DiagnosticSelectRequestJSON from "../diagnostics/request/request.select.json";
import * as DiagnosticSelectResponseJSON from "../diagnostics/response/response.select.json";
import * as DiagnosticInitRequestJSON from "../diagnostics/request/request.init.json";
import * as DiagnosticInitResponseJSON from "../diagnostics/response/response.init.json";
import * as DiagnosticConfirmRequestJSON from "../diagnostics/request/request.confirm.json";
import * as DiagnosticConfirmResponseJSON from "../diagnostics/response/response.confirm.json";
import * as DiagnosticStatusRequestJSON from "../diagnostics/request/request.status.json";
import * as DiagnosticStatusResponseJSON from "../diagnostics/response/response.status.json";
import * as DiagnosticCancelRequestJSON from "../diagnostics/request/request.cancel.json";
import * as DiagnosticCancelResponseJSON from "../diagnostics/response/response.cancel.json";
import * as DiagnosticUpdateRequestJSON from "../diagnostics/request/request.update.json";
import * as DiagnosticUpdateResponseJSON from "../diagnostics/response/response.update.json";
import * as DiagnosticTrackRequestJSON from "../diagnostics/request/request.track.json";
import * as DiagnosticTrackResponseJSON from "../diagnostics/response/response.track.json";
import * as DiagnosticSupportRequestJSON from "../diagnostics/request/request.support.json";
import * as DiagnosticSupportResponseJSON from "../diagnostics/response/response.support.json";
import * as DiagnosticRatingRequestJSON from "../diagnostics/request/request.rating.json";
import * as DiagnosticRatingResponseJSON from "../diagnostics/response/response.rating.json";

// mock imports for DHP:Consultation
import * as ConsultationSearchRequestJSON from "../consultation/request/request.search.json";
import * as ConsultationSearchResponseJSON from "../consultation/response/response.search.json";
import * as ConsultationSelectRequestJSON from "../consultation/request/request.select.json";
import * as ConsultationSelectResponseJSON from "../consultation/response/response.select.json";
import * as ConsultationInitRequestJSON from "../consultation/request/request.init.json";
import * as ConsultationInitResponseJSON from "../consultation/response/response.init1.json";
import * as ConsultationConfirmRequestJSON from "../consultation/request/request.confirm.json";
import * as ConsultationConfirmResponseJSON from "../consultation/response/response.confirm.json";
import * as ConsultationStatusRequestJSON from "../consultation/request/request.status.json";
import * as ConsultationStatusResponseJSON from "../consultation/response/response.status.json";
import * as ConsultationCancelRequestJSON from "../consultation/request/request.cancel.json";
import * as ConsultationCancelResponseJSON from "../consultation/response/response.cancel.json";
import * as ConsultationUpdateRequestJSON from "../consultation/request/request.update.booking.slot.json";
import * as ConsultationUpdateResponseJSON from "../consultation/response/response.update.json";
import * as ConsultationTrackRequestJSON from "../consultation/request/request.track.json";
import * as ConsultationTrackResponseJSON from "../consultation/response/response.track.json";
import * as ConsultationSupportRequestJSON from "../consultation/request/request.support.json";
import * as ConsultationSupportResponseJSON from "../consultation/response/response.support.json";
import * as ConsultationRatingRequestJSON from "../consultation/request/request.rating.json";
import * as ConsultationRatingResponseJSON from "../consultation/response/response.rating.json";

describe("DHP: Pharmacy Controller", () => {
    let controller: DHPController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DHPController],
            providers: [DHPService],
        }).compile();

        controller = module.get<DHPController>(DHPController);
    });

    it("DHP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // Pharmacy E2E testing
    it("Should return Search response", () => {
        expect(controller.search(PharmacySearchRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacySearchResponseJSON);
    });
    it("Should return Select response", () => {
        expect(controller.select(PharmacySelectRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacySelectResponseJSON);
    });
    it("Should return Init response", () => {
        expect(controller.init(PharmacyInitRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyInitResponseJSON);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(PharmacyConfirmRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyConfirmResponseJSON);
    });
    it("Should return Status response", () => {
        expect(controller.status(PharmacyStatusRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyStatusResponseJSON);
    });
    it("Should return Support response", () => {
        expect(controller.support(PharmacySupportRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacySupportResponseJSON);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(PharmacyRatingRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyRatingResponseJSON);
    });
    it("Should return Update response", () => {
        expect(controller.update(PharmacyUpdateRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyUpdateResponseJSON);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(PharmacyCancelRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyCancelResponseJSON);
    });
    it("Should return Track response", () => {
        expect(controller.track(PharmacyTrackRequestJSON as unknown as DHPRequestDto)).toEqual(PharmacyTrackResponseJSON);
    });
});

describe("DHP:Diagnostics Controller", () => {
    let controller: DHPController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DHPController],
            providers: [DHPService],
        }).compile();

        controller = module.get<DHPController>(DHPController);
    });

    it("DHP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // DHP:Diagnostics E2E testing
    it("Should return Search response", () => {
        expect(controller.search(DiagnosticSearchRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticSearchResponseJSON);
    });
    it("Should return Select response", () => {
        expect(controller.select(DiagnosticSelectRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticSelectResponseJSON);
    });
    it("Should return Init response", () => {
        expect(controller.init(DiagnosticInitRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticInitResponseJSON);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(DiagnosticConfirmRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticConfirmResponseJSON);
    });
    it("Should return Status response", () => {
        expect(controller.status(DiagnosticStatusRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticStatusResponseJSON);
    });
    it("Should return Update response", () => {
        expect(controller.update(DiagnosticUpdateRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticUpdateResponseJSON);
    });
    it("Should return Support response", () => {
        expect(controller.support(DiagnosticSupportRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticSupportResponseJSON);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(DiagnosticRatingRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticRatingResponseJSON);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(DiagnosticCancelRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticCancelResponseJSON);
    });
    it("Should return Track response", () => {
        expect(controller.track(DiagnosticTrackRequestJSON as unknown as DHPRequestDto)).toEqual(DiagnosticTrackResponseJSON);
    });
});

describe("DHP:Consultation Controller", () => {
    let controller: DHPController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DHPController],
            providers: [DHPService],
        }).compile();

        controller = module.get<DHPController>(DHPController);
    });

    it("DSEP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // DHP:Consultation E2E testing
    it("Should return Search response", () => {
        expect(controller.search(ConsultationSearchRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationSearchResponseJSON);
    });
    it("Should return Select response", () => {
        expect(controller.select(ConsultationSelectRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationSelectResponseJSON);
    });
    it("Should return Init response", () => {
        expect(controller.init(ConsultationInitRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationInitResponseJSON);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(ConsultationConfirmRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationConfirmResponseJSON);
    });
    it("Should return Status response", () => {
        expect(controller.status(ConsultationStatusRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationStatusResponseJSON);
    });
    it("Should return Update response", () => {
        expect(controller.update(ConsultationUpdateRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationUpdateResponseJSON);
    });
    it("Should return Support response", () => {
        expect(controller.support(ConsultationSupportRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationSupportResponseJSON);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(ConsultationRatingRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationRatingResponseJSON);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(ConsultationCancelRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationCancelResponseJSON);
    });
    it("Should return Track response", () => {
        expect(controller.track(ConsultationTrackRequestJSON as unknown as DHPRequestDto)).toEqual(ConsultationTrackResponseJSON);
    });
});
