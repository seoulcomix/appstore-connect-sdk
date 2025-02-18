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
import type { WinBackOfferAttributes } from './WinBackOfferAttributes';
import {
    WinBackOfferAttributesFromJSON,
    WinBackOfferAttributesFromJSONTyped,
    WinBackOfferAttributesToJSON,
} from './WinBackOfferAttributes';
import type { WinBackOfferRelationships } from './WinBackOfferRelationships';
import {
    WinBackOfferRelationshipsFromJSON,
    WinBackOfferRelationshipsFromJSONTyped,
    WinBackOfferRelationshipsToJSON,
} from './WinBackOfferRelationships';

/**
 * 
 * @export
 * @interface WinBackOffer
 */
export interface WinBackOffer {
    /**
     * 
     * @type {string}
     * @memberof WinBackOffer
     */
    type: WinBackOfferTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOffer
     */
    id: string;
    /**
     * 
     * @type {WinBackOfferAttributes}
     * @memberof WinBackOffer
     */
    attributes?: WinBackOfferAttributes;
    /**
     * 
     * @type {WinBackOfferRelationships}
     * @memberof WinBackOffer
     */
    relationships?: WinBackOfferRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof WinBackOffer
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const WinBackOfferTypeEnum = {
    WinBackOffers: 'winBackOffers'
} as const;
export type WinBackOfferTypeEnum = typeof WinBackOfferTypeEnum[keyof typeof WinBackOfferTypeEnum];


/**
 * Check if a given object implements the WinBackOffer interface.
 */
export function instanceOfWinBackOffer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function WinBackOfferFromJSON(json: any): WinBackOffer {
    return WinBackOfferFromJSONTyped(json, false);
}

export function WinBackOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOffer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : WinBackOfferAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : WinBackOfferRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function WinBackOfferToJSON(value?: WinBackOffer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': WinBackOfferAttributesToJSON(value.attributes),
        'relationships': WinBackOfferRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

