import { Injectable } from "@nestjs/common";
import { DSEPModulesEnum } from "./dsep-modules.enum";
import { ScholarshipsGrantsService } from "./scholarships-grants/scholarships-grants.service";
import { DomainNotFoundException } from "../common/exception/domain-notfound.exception";
import { JobsInternshipsService } from "./jobs-internships/jobs-internships.service";
import { TutoringMentorshipService } from "./tutoring-mentorship/tutoring-mentorship.service";
import { CoursesTrainingService } from "./courses-training/courses-training.service";
import { StudentConnectService } from "./student-connect/student-connect.service";
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
            case DSEPModulesEnum.STUDENT_CONNECT:
                return new StudentConnectService();
            case DSEPModulesEnum.ONEST_WORK_OPPORTUNITIES:
                return new JobsInternshipsService();
            case DSEPModulesEnum.ONEST_LEARNING_EXPERIENCES:
                return new CoursesTrainingService();
            case DSEPModulesEnum.ONEST_FINANCIAL_SUPPORT:
                return new ScholarshipsGrantsService();
            case DSEPModulesEnum.ONEST_EXPERT_CONNECT:
                return new TutoringMentorshipService();
            default:
                throw new DomainNotFoundException();
        }
    }
}
