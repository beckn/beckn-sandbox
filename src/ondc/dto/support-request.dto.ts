import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class SupportRequestDto extends MobilityRequestDto {
    message: {
        ref_id: string;
    };
}
