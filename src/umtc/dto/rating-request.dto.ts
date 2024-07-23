import { MobilityRequestDto } from "src/mobility/dto/request.dto";

export class RatingRequestDto extends MobilityRequestDto {
    message: {
        rating_category: string;
        id: string;
        value: string;
    };
}
