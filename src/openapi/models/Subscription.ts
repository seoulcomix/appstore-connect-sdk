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
import type { SubscriptionAttributes } from './SubscriptionAttributes';
import {
    SubscriptionAttributesFromJSON,
    SubscriptionAttributesFromJSONTyped,
    SubscriptionAttributesToJSON,
} from './SubscriptionAttributes';
import type { SubscriptionRelationships } from './SubscriptionRelationships';
import {
    SubscriptionRelationshipsFromJSON,
    SubscriptionRelationshipsFromJSONTyped,
    SubscriptionRelationshipsToJSON,
} from './SubscriptionRelationships';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    type: SubscriptionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    id: string;
    /**
     * 
     * @type {SubscriptionAttributes}
     * @memberof Subscription
     */
    attributes?: SubscriptionAttributes;
    /**
     * 
     * @type {SubscriptionRelationships}
     * @memberof Subscription
     */
    relationships?: SubscriptionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Subscription
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionTypeEnum = {
    Subscriptions: 'subscriptions'
} as const;
export type SubscriptionTypeEnum = typeof SubscriptionTypeEnum[keyof typeof SubscriptionTypeEnum];


/**
 * Check if a given object implements the Subscription interface.
 */
export function instanceOfSubscription(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionToJSON(value?: Subscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionAttributesToJSON(value.attributes),
        'relationships': SubscriptionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

