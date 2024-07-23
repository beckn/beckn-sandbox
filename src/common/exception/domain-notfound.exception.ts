import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";

export class DomainNotFoundException extends HttpException {
    constructor() {
        super("Domain not found", HttpStatus.NOT_FOUND);
    }
}
