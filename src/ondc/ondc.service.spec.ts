import { Test, TestingModule } from "@nestjs/testing";

import { OndcService } from "./ondc.service";

describe("OndcService", () => {
    let service: OndcService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OndcService],
        }).compile();

        service = module.get<OndcService>(OndcService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
