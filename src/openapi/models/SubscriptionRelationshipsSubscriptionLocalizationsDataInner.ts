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
 * @interface SubscriptionRelationshipsSubscriptionLocalizationsDataInner
 */
export interface SubscriptionRelationshipsSubscriptionLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsSubscriptionLocalizationsDataInner
     */
    type: SubscriptionRelationshipsSubscriptionLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsSubscriptionLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionRelationshipsSubscriptionLocalizationsDataInnerTypeEnum = {
    SubscriptionLocalizations: 'subscriptionLocalizations'
} as const;
export type SubscriptionRelationshipsSubscriptionLocalizationsDataInnerTypeEnum = typeof SubscriptionRelationshipsSubscriptionLocalizationsDataInnerTypeEnum[keyof typeof SubscriptionRelationshipsSubscriptionLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionRelationshipsSubscriptionLocalizationsDataInner interface.
 */
export function instanceOfSubscriptionRelationshipsSubscriptionLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionRelationshipsSubscriptionLocalizationsDataInnerFromJSON(json: any): SubscriptionRelationshipsSubscriptionLocalizationsDataInner {
    return SubscriptionRelationshipsSubscriptionLocalizationsDataInnerFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsSubscriptionLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsSubscriptionLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionRelationshipsSubscriptionLocalizationsDataInnerToJSON(value?: SubscriptionRelationshipsSubscriptionLocalizationsDataInner | null): any {
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

