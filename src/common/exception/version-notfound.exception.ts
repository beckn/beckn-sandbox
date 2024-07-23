import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";

export class VersionNotFoundException extends HttpException {
    constructor() {
        super("Version not found", HttpStatus.NOT_FOUND);
    }
}
