import { GroupCreateRequest } from "../apis/Group.api";
import { CreateGroupRequestForm } from "../forms/CreateGroupRequestForm";

export function transformCreateGroupRequestForm2CreateGroupRequest(createRequest: CreateGroupRequestForm): GroupCreateRequest {
    return {
        name: createRequest.name,
        description: createRequest.description,
        color: createRequest.color
    }
}