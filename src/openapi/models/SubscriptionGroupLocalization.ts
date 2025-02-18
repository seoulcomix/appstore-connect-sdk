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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { SubscriptionGroupLocalizationAttributes } from './SubscriptionGroupLocalizationAttributes';
import {
    SubscriptionGroupLocalizationAttributesFromJSON,
    SubscriptionGroupLocalizationAttributesFromJSONTyped,
    SubscriptionGroupLocalizationAttributesToJSON,
} from './SubscriptionGroupLocalizationAttributes';
import type { SubscriptionGroupLocalizationRelationships } from './SubscriptionGroupLocalizationRelationships';
import {
    SubscriptionGroupLocalizationRelationshipsFromJSON,
    SubscriptionGroupLocalizationRelationshipsFromJSONTyped,
    SubscriptionGroupLocalizationRelationshipsToJSON,
} from './SubscriptionGroupLocalizationRelationships';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalization
 */
export interface SubscriptionGroupLocalization {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalization
     */
    type: SubscriptionGroupLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalization
     */
    id: string;
    /**
     * 
     * @type {SubscriptionGroupLocalizationAttributes}
     * @memberof SubscriptionGroupLocalization
     */
    attributes?: SubscriptionGroupLocalizationAttributes;
    /**
     * 
     * @type {SubscriptionGroupLocalizationRelationships}
     * @memberof SubscriptionGroupLocalization
     */
    relationships?: SubscriptionGroupLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionGroupLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionGroupLocalizationTypeEnum = {
    SubscriptionGroupLocalizations: 'subscriptionGroupLocalizations'
} as const;
export type SubscriptionGroupLocalizationTypeEnum = typeof SubscriptionGroupLocalizationTypeEnum[keyof typeof SubscriptionGroupLocalizationTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupLocalization interface.
 */
export function instanceOfSubscriptionGroupLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionGroupLocalizationFromJSON(json: any): SubscriptionGroupLocalization {
    return SubscriptionGroupLocalizationFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionGroupLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionGroupLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionGroupLocalizationToJSON(value?: SubscriptionGroupLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionGroupLocalizationAttributesToJSON(value.attributes),
        'relationships': SubscriptionGroupLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

