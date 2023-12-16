import { CollectionModel } from "./Collection.model"

export type TopicModel = {
    topic_id: number
    creator: number
    name: string
    description: string | null
    image_url: string | null
    is_active: boolean
    is_private: boolean
    created_date: string
    updated_date: string
}

export type TopicCollectionModel = {
    topic: TopicModel;
    collection: CollectionModel[]
}

export type TopicCollectionPopulateCollectionModel = {
    id: number;
    collection: CollectionModel;
    order: number;
    topic: number;
}

export type TopicPopulateTopicCollectionPopulateCollectionModel = TopicModel & {
    collections: TopicCollectionPopulateCollectionModel[]
}