import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class TrackRequestDto extends MobilityRequestDto {
    message: {
        order_id: string;
    };
}
