import { Injectable } from "@nestjs/common";
import { DSEPModulesEnum } from "./dsep-modules.enum";
import { ScholarshipsGrantsService } from "./scholarships-grants/scholarships-grants.service";
import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";
import { JobsInternshipsService } from "./jobs-internships/jobs-internships.service";
import { TutoringMentorshipService } from "./tutoring-mentorship/tutoring-mentorship.service";
import { CoursesTrainingService } from "./courses-training/courses-training.service";
import { DSEPApiInterface } from "./dsep-api.interface";
@Injectable()
export class DsepService {
    get(domain: DSEPModulesEnum): DSEPApiInterface {
        switch (domain) {
            case DSEPModulesEnum.SCHOLARSHIPS_GRANTS:
                return new ScholarshipsGrantsService();
            case DSEPModulesEnum.JOBS_INTERNSHIPS:
                return new JobsInternshipsService();
            case DSEPModulesEnum.COURSES_TRAINING:
                return new CoursesTrainingService();
            case DSEPModulesEnum.TUTORING_MENTORSHIPS:
                return new TutoringMentorshipService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
