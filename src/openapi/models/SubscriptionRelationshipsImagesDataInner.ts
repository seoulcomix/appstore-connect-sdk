/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubscriptionRelationshipsImagesDataInner
 */
export interface SubscriptionRelationshipsImagesDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsImagesDataInner
     */
    type: SubscriptionRelationshipsImagesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsImagesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionRelationshipsImagesDataInnerTypeEnum = {
    SubscriptionImages: 'subscriptionImages'
} as const;
export type SubscriptionRelationshipsImagesDataInnerTypeEnum = typeof SubscriptionRelationshipsImagesDataInnerTypeEnum[keyof typeof SubscriptionRelationshipsImagesDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionRelationshipsImagesDataInner interface.
 */
export function instanceOfSubscriptionRelationshipsImagesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionRelationshipsImagesDataInnerFromJSON(json: any): SubscriptionRelationshipsImagesDataInner {
    return SubscriptionRelationshipsImagesDataInnerFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsImagesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsImagesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionRelationshipsImagesDataInnerToJSON(value?: SubscriptionRelationshipsImagesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

