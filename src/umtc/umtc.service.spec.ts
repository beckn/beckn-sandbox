import { Test, TestingModule } from "@nestjs/testing";

import { UmtcService } from "./umtc.service";

describe("UmtcService", () => {
    let service: UmtcService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UmtcService],
        }).compile();

        service = module.get<UmtcService>(UmtcService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
