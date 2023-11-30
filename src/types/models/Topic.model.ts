import { CollectionModel } from "./Collection.model"

export type TopicModel = {
    topic_id: number
    creator: number
    name: string
    description: string | null
    image_url: string | null
    is_active: boolean
    is_private: boolean
}

export type TopicCollectionModel = {
    topic: TopicModel;
    collection: CollectionModel[]
}