import { Test, TestingModule } from "@nestjs/testing";
import { Industry40Service } from "./industry-4.0.service";

describe("Industry40Service", () => {
    let service: Industry40Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Industry40Service],
        }).compile();

        service = module.get<Industry40Service>(Industry40Service);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
