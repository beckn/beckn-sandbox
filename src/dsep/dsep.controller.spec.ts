import { Test, TestingModule } from "@nestjs/testing";
import { DsepController } from "./dsep.controller";
import { DsepService } from "./dsep.service";
import { DSEPRequestDto } from "./dto/request.dto";

// Request Response JSON imports for Scholarship
import * as SearchOnScholarshipNameRequest from "./scholarships-grants/request/request.searchOnScholarshipName.json";
import * as SearchOnScholarshipNameResponse from "./scholarships-grants/response/response.searchOnScholarshipName.json";
import * as SearchOnGenderResponse from "./scholarships-grants/response/response.searchOnGender.json";
import * as SearchOnGenderRequest from "./scholarships-grants/request/request.searchOnGender.json";
import * as SearchOnGenderAndCourseCategoryRequest from "./scholarships-grants/request/request.searchOnGenderAndCourse.json";
import * as SearchOnGenderAndCourseCategoryResponse from "./scholarships-grants/response/response.searchOnGenderAndCourse.json";
import * as ScholarshipSelectRequest from "./scholarships-grants/request/request.select.json";
import * as ScholarshipSelectResponse from "./scholarships-grants/response/response.select.json";
import * as ScholarshipInitRequest from "./scholarships-grants/request/request.init.json";
import * as ScholarshipInitResponse from "./scholarships-grants/response/response.init.json";
import * as ScholarshipConfirmRequest from "./scholarships-grants/request/request.confirm.json";
import * as ScholarshipConfirmResponse from "./scholarships-grants/response/response.confirm.json";
import * as ScholarshipStatusRequest from "./scholarships-grants/request/request.status.json";
import * as ScholarshipStatusResponse from "./scholarships-grants/response/response.status.json";
import * as ScholarshipUpdaterequest from "./scholarships-grants/request/request.update.json";
import * as ScholarshipUpdateResponse from "./scholarships-grants/response/response.update.json";
import * as ScholarshipSupportRequest from "./scholarships-grants/request/request.support.json";
import * as ScholarshipSupportResponse from "./scholarships-grants/response/response.support.json";
import * as ScholarshipRatingRequest from "./scholarships-grants/request/request.rating.json";
import * as ScholarshipRatingResponse from "./scholarships-grants/response/response.rating.json";
import * as ScholarshipCancelRequest from "./scholarships-grants/request/request.cancel.json";
import * as ScholarshipCancelResponse from "./scholarships-grants/response/response.cancel.json";
import * as ScholarshipTrackRequest from "./scholarships-grants/request/request.track.json";
import * as ScholarshipTrackResponse from "./scholarships-grants/response/response.track.json";

// Request Response JSON imports for Jobs
import * as SearchOnTitleEngineerRequest from "./jobs-internships/request/request.searchWithTitleEngineer.json";
import * as SearchOnTitleEngineerResponse from "./jobs-internships/response/response.searchWithTitleEngineer.json";
import * as SearchOnTitleDeveloperRequest from "./jobs-internships/request/request.searchWithTitleDeveloper.json";
import * as SearchOnTitleDeveloperResponse from "./jobs-internships/response/response.searchWithTitleDeveloper.json";
import * as SearchWithTitleAndLocationRequest from "./jobs-internships/request/request.searchWithTitleAndLocation.json";
import * as SearchWithTitleAndLocationResponse from "./jobs-internships/response/response.searchWithTitleAndLocation.json";
import * as JobsSelectRequest from "./jobs-internships/request/request.select.json";
import * as JobsSelectResponse from "./jobs-internships/response/response.select.json";
import * as JobsInitRequest from "./jobs-internships/request/request.init.json";
import * as JobsInitResponse from "./jobs-internships/response/response.init.json";
import * as JobsConfirmRequest from "./jobs-internships/request/request.confirm.json";
import * as JobsConfirmResponse from "./jobs-internships/response/response.confirm.json";
import * as JobsStatusRequest from "./jobs-internships/request/request.status.json";
import * as JobsStatusResponse from "./jobs-internships/response/response.status.json";
import * as JobsUpdateRequest from "./jobs-internships/request/request.update.json";
import * as JobsUpdateResponse from "./jobs-internships/response/response.update.json";
import * as JobsRatingRequest from "./jobs-internships/request/request.rating.json";
import * as JobsRatingResponse from "./jobs-internships/response/response.rating.json";
import * as JobsSupportRequest from "./jobs-internships/request/request.support.json";
import * as JobsSupportResponse from "./jobs-internships/response/response.support.json";
import * as JobsCancelRequest from "./jobs-internships/request/request.cancel.json";
import * as JobsCancelResponse from "./jobs-internships/response/response.cancel.json";
import * as JobsTrackRequest from "./jobs-internships/request/request.track.json";
import * as JobsTrackResponse from "./jobs-internships/response/response.track.json";

// Request Response JSON imports for Courses
import * as CoursesSearchRequest from "./courses-training/request/request.searchByCategorySchool.json";
import * as CoursesSearchResponse from "./courses-training/response/response.searchByCategorySchool.json";
import * as CoursesSelectRequest from "./courses-training/request/request.select.json";
import * as CoursesSelectResponse from "./courses-training/response/response.select.json";
import * as CoursesInitRequest from "./courses-training/request/request.init.json";
import * as CoursesInitResponse from "./courses-training/response/response.init.json";
import * as CoursesConfirmRequest from "./courses-training/request/request.confirm.json";
import * as CoursesConfirmResponse from "./courses-training/response/response.confirm.json";
import * as CoursesStatusRequest from "./courses-training/request/request.status.json";
import * as CoursesStatusResponse from "./courses-training/response/response.status.json";
import * as CoursesUpdateRequest from "./courses-training/request/request.update.json";
import * as CoursesUpdateResponse from "./courses-training/response/response.update.json";
import * as CoursesSupportRequest from "./courses-training/request/request.support.json";
import * as CoursesSupportResponse from "./courses-training/response/response.support.json";
import * as CoursesRatingRequest from "./courses-training/request/request.rating.json";
import * as CoursesRatingResponse from "./courses-training/response/response.rating.json";
import * as CoursesCancelRequest from "./courses-training/request/request.cancel.json";
import * as CoursesCancelResponse from "./courses-training/response/response.cancel.json";
import * as CoursesTrackRequest from "./courses-training/request/request.track.json";
import * as CoursesTrackResponse from "./courses-training/response/response.track.json";

// Request Response JSON imports for Tutoring
import * as TutoringSearchRequest from "./tutoring-mentorship/request/request.search.json";
import * as TutoringSearchResponse from "./tutoring-mentorship/response/response.search.json";
import * as TutoringSelectRequest from "./tutoring-mentorship/request/request.select.json";
import * as TutoringSelectResponse from "./tutoring-mentorship/response/response.select.json";
import * as TutoringInitRequest from "./tutoring-mentorship/request/request.init.json";
import * as TutoringInitResponse from "./tutoring-mentorship/response/response.init.json";
import * as TutoringConfirmRequest from "./tutoring-mentorship/request/request.confirm.json";
import * as TutoringConfirmResponse from "./tutoring-mentorship/response/response.confirm.json";
import * as TutoringStatusRequest from "./tutoring-mentorship/request/request.status.json";
import * as TutoringStatusResponse from "./tutoring-mentorship/response/response.status.json";
import * as TutoringUpdateRequest from "./tutoring-mentorship/request/request.update.json";
import * as TutoringUpdateResponse from "./tutoring-mentorship/response/response.update.json";
import * as TutoringSupportRequest from "./tutoring-mentorship/request/request.support.json";
import * as TutoringSupportResponse from "./tutoring-mentorship/response/response.support.json";
import * as TutoringRatingRequest from "./tutoring-mentorship/request/request.rating.json";
import * as TutoringRatingResponse from "./tutoring-mentorship/response/response.rating.json";
import * as TutoringCancelRequest from "./tutoring-mentorship/request/request.cancel.json";
import * as TutoringCancelResponse from "./tutoring-mentorship/response/response.cancel.json";
import * as TutoringTrackRequest from "./tutoring-mentorship/request/request.track.json";
import * as TutoringTrackResponse from "./tutoring-mentorship/response/response.track.json";

describe("DSEP:Scholarships and Grants Controller", () => {
    let controller: DsepController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DsepController],
            providers: [DsepService],
        }).compile();

        controller = module.get<DsepController>(DsepController);
    });

    it("DSEP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // Scholarships And Grants E2E testing
    it("Should return Search On Scholarship Name response", () => {
        expect(controller.search(SearchOnScholarshipNameRequest as DSEPRequestDto)).toEqual(SearchOnScholarshipNameResponse);
    });
    it("Should return Search On Gender response", () => {
        expect(controller.search(SearchOnGenderRequest as DSEPRequestDto)).toEqual(SearchOnGenderResponse);
    });
    it("Should return Search On Gender and Course Category response", () => {
        expect(controller.search(SearchOnGenderAndCourseCategoryRequest as DSEPRequestDto)).toEqual(SearchOnGenderAndCourseCategoryResponse);
    });
    it("Should return Select response", () => {
        expect(controller.select(ScholarshipSelectRequest as DSEPRequestDto)).toEqual(ScholarshipSelectResponse);
    });
    it("Should return Init response", () => {
        expect(controller.init(ScholarshipInitRequest as DSEPRequestDto)).toEqual(ScholarshipInitResponse);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(ScholarshipConfirmRequest as DSEPRequestDto)).toEqual(ScholarshipConfirmResponse);
    });
    it("Should return Status response", () => {
        expect(controller.status(ScholarshipStatusRequest as DSEPRequestDto)).toEqual(ScholarshipStatusResponse);
    });
    it("Should return Support response", () => {
        expect(controller.support(ScholarshipSupportRequest as DSEPRequestDto)).toEqual(ScholarshipSupportResponse);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(ScholarshipRatingRequest as DSEPRequestDto)).toEqual(ScholarshipRatingResponse);
    });
    it("Should return Update response", () => {
        expect(controller.update(ScholarshipUpdaterequest as DSEPRequestDto)).toEqual(ScholarshipUpdateResponse);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(ScholarshipCancelRequest as DSEPRequestDto)).toEqual(ScholarshipCancelResponse);
    });
    it("Should return Track response", () => {
        expect(controller.track(ScholarshipTrackRequest as DSEPRequestDto)).toEqual(ScholarshipTrackResponse);
    });
});

describe("DSEP:Jobs and Internships Controller", () => {
    let controller: DsepController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DsepController],
            providers: [DsepService],
        }).compile();

        controller = module.get<DsepController>(DsepController);
    });

    it("DSEP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // Jobs and Internships E2E testing
    it("Should return Search On Title Engineer response", () => {
        expect(controller.search(SearchOnTitleEngineerRequest as DSEPRequestDto)).toEqual(SearchOnTitleEngineerResponse);
    });
    it("Should return Search On Gender response", () => {
        expect(controller.search(SearchOnTitleDeveloperRequest as DSEPRequestDto)).toEqual(SearchOnTitleDeveloperResponse);
    });
    it("Should return Search On Gender and Course Category response", () => {
        expect(controller.search(SearchWithTitleAndLocationRequest as DSEPRequestDto)).toEqual(SearchWithTitleAndLocationResponse);
    });
    it("Should return Select response", () => {
        expect(controller.select(JobsSelectRequest as DSEPRequestDto)).toEqual(JobsSelectResponse);
    });
    it("Should return Init response", () => {
        expect(controller.init(JobsInitRequest as DSEPRequestDto)).toEqual(JobsInitResponse);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(JobsConfirmRequest as DSEPRequestDto)).toEqual(JobsConfirmResponse);
    });
    it("Should return Status response", () => {
        expect(controller.status(JobsStatusRequest as DSEPRequestDto)).toEqual(JobsStatusResponse);
    });
    it("Should return Update response", () => {
        expect(controller.update(JobsUpdateRequest as DSEPRequestDto)).toEqual(JobsUpdateResponse);
    });
    it("Should return Support response", () => {
        expect(controller.support(JobsSupportRequest as DSEPRequestDto)).toEqual(JobsSupportResponse);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(JobsRatingRequest as DSEPRequestDto)).toEqual(JobsRatingResponse);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(JobsCancelRequest as DSEPRequestDto)).toEqual(JobsCancelResponse);
    });
    it("Should return Track response", () => {
        expect(controller.track(JobsTrackRequest as DSEPRequestDto)).toEqual(JobsTrackResponse);
    });
});

describe("DSEP:Training and Courses Controller", () => {
    let controller: DsepController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DsepController],
            providers: [DsepService],
        }).compile();

        controller = module.get<DsepController>(DsepController);
    });

    it("DSEP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // Training and Courses E2E testing
    it("Should return Search response", () => {
        expect(controller.search(CoursesSearchRequest as DSEPRequestDto)).toEqual(CoursesSearchResponse);
    });
    it("Should return Select response", () => {
        expect(controller.select(CoursesSelectRequest as DSEPRequestDto)).toEqual(CoursesSelectResponse);
    });
    it("Should return Init response", () => {
        expect(controller.init(CoursesInitRequest as DSEPRequestDto)).toEqual(CoursesInitResponse);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(CoursesConfirmRequest as DSEPRequestDto)).toEqual(CoursesConfirmResponse);
    });
    it("Should return Status response", () => {
        expect(controller.status(CoursesStatusRequest as DSEPRequestDto)).toEqual(CoursesStatusResponse);
    });
    it("Should return Update response", () => {
        expect(controller.update(CoursesUpdateRequest as DSEPRequestDto)).toEqual(CoursesUpdateResponse);
    });
    it("Should return Support response", () => {
        expect(controller.support(CoursesSupportRequest as DSEPRequestDto)).toEqual(CoursesSupportResponse);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(CoursesRatingRequest as DSEPRequestDto)).toEqual(CoursesRatingResponse);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(CoursesCancelRequest as DSEPRequestDto)).toEqual(CoursesCancelResponse);
    });
    it("Should return Track response", () => {
        expect(controller.track(CoursesTrackRequest as DSEPRequestDto)).toEqual(CoursesTrackResponse);
    });
});

describe("DSEP:Tutoring and Mentorship Controller", () => {
    let controller: DsepController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DsepController],
            providers: [DsepService],
        }).compile();

        controller = module.get<DsepController>(DsepController);
    });

    it("DSEP controller should be defined", () => {
        expect(controller).toBeDefined();
    });

    // Training and Courses E2E testing
    it("Should return Search response", () => {
        expect(controller.search(TutoringSearchRequest as DSEPRequestDto)).toEqual(TutoringSearchResponse);
    });
    it("Should return Select response", () => {
        expect(controller.select(TutoringSelectRequest as DSEPRequestDto)).toEqual(TutoringSelectResponse);
    });
    it("Should return Init response", () => {
        expect(controller.init(TutoringInitRequest as DSEPRequestDto)).toEqual(TutoringInitResponse);
    });
    it("Should return Confirm response", () => {
        expect(controller.confirm(TutoringConfirmRequest as DSEPRequestDto)).toEqual(TutoringConfirmResponse);
    });
    it("Should return Status response", () => {
        expect(controller.status(TutoringStatusRequest as DSEPRequestDto)).toEqual(TutoringStatusResponse);
    });
    it("Should return Update response", () => {
        expect(controller.update(TutoringUpdateRequest as DSEPRequestDto)).toEqual(TutoringUpdateResponse);
    });
    it("Should return Support response", () => {
        expect(controller.support(TutoringSupportRequest as DSEPRequestDto)).toEqual(TutoringSupportResponse);
    });
    it("Should return Rating response", () => {
        expect(controller.rating(TutoringRatingRequest as DSEPRequestDto)).toEqual(TutoringRatingResponse);
    });
    it("Should return Cancel response", () => {
        expect(controller.cancel(TutoringCancelRequest as DSEPRequestDto)).toEqual(TutoringCancelResponse);
    });
    it("Should return Track response", () => {
        expect(controller.track(TutoringTrackRequest as DSEPRequestDto)).toEqual(TutoringTrackResponse);
    });
});
