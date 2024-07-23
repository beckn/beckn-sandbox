import { Test, TestingModule } from "@nestjs/testing";

import { MobilityService } from "./mobility.service";

describe("MobilityService", () => {
    let service: MobilityService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MobilityService],
        }).compile();

        service = module.get<MobilityService>(MobilityService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
