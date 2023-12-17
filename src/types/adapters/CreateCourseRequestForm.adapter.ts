import { CreateCourseRequestForm } from "../forms/CreateCourseRequestForm";

export function transformCreateCourseRequestForm2CreateTopicRequestFormData(createRequest: CreateCourseRequestForm): FormData {
    const formData = new FormData();
    formData.append("name", createRequest.title);
    formData.append("description", JSON.stringify(createRequest.description));
    // formData.append("image_url", createRequest.image);
    formData.append("is_private", createRequest.isPrivate ? "true" : "false");

    return formData;
}