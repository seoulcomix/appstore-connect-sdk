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
import type { SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup } from './SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup';
import {
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON,
} from './SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup';

/**
 * 
 * @export
 * @interface SubscriptionCreateRequestDataRelationships
 */
export interface SubscriptionCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup}
     * @memberof SubscriptionCreateRequestDataRelationships
     */
    group: SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup;
}

/**
 * Check if a given object implements the SubscriptionCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "group" in value;

    return isInstance;
}

export function SubscriptionCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionCreateRequestDataRelationships {
    return SubscriptionCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON(json['group']),
    };
}

export function SubscriptionCreateRequestDataRelationshipsToJSON(value?: SubscriptionCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON(value.group),
    };
}

