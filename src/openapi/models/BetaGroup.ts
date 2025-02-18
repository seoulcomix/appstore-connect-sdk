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
import type { BetaGroupAttributes } from './BetaGroupAttributes';
import {
    BetaGroupAttributesFromJSON,
    BetaGroupAttributesFromJSONTyped,
    BetaGroupAttributesToJSON,
} from './BetaGroupAttributes';
import type { BetaGroupRelationships } from './BetaGroupRelationships';
import {
    BetaGroupRelationshipsFromJSON,
    BetaGroupRelationshipsFromJSONTyped,
    BetaGroupRelationshipsToJSON,
} from './BetaGroupRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaGroup
 */
export interface BetaGroup {
    /**
     * 
     * @type {string}
     * @memberof BetaGroup
     */
    type: BetaGroupTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaGroup
     */
    id: string;
    /**
     * 
     * @type {BetaGroupAttributes}
     * @memberof BetaGroup
     */
    attributes?: BetaGroupAttributes;
    /**
     * 
     * @type {BetaGroupRelationships}
     * @memberof BetaGroup
     */
    relationships?: BetaGroupRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaGroup
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaGroupTypeEnum = {
    BetaGroups: 'betaGroups'
} as const;
export type BetaGroupTypeEnum = typeof BetaGroupTypeEnum[keyof typeof BetaGroupTypeEnum];


/**
 * Check if a given object implements the BetaGroup interface.
 */
export function instanceOfBetaGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaGroupFromJSON(json: any): BetaGroup {
    return BetaGroupFromJSONTyped(json, false);
}

export function BetaGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaGroupAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BetaGroupRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaGroupToJSON(value?: BetaGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaGroupAttributesToJSON(value.attributes),
        'relationships': BetaGroupRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

