/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppPricePointRelationships } from './AppPricePointRelationships';
import {
    AppPricePointRelationshipsFromJSON,
    AppPricePointRelationshipsFromJSONTyped,
    AppPricePointRelationshipsToJSON,
} from './AppPricePointRelationships';
import type { AppPricePointV2Attributes } from './AppPricePointV2Attributes';
import {
    AppPricePointV2AttributesFromJSON,
    AppPricePointV2AttributesFromJSONTyped,
    AppPricePointV2AttributesToJSON,
} from './AppPricePointV2Attributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppPricePoint
 */
export interface AppPricePoint {
    /**
     * 
     * @type {string}
     * @memberof AppPricePoint
     */
    type: AppPricePointTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPricePoint
     */
    id: string;
    /**
     * 
     * @type {AppPricePointV2Attributes}
     * @memberof AppPricePoint
     */
    attributes?: AppPricePointV2Attributes;
    /**
     * 
     * @type {AppPricePointRelationships}
     * @memberof AppPricePoint
     */
    relationships?: AppPricePointRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppPricePoint
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppPricePointTypeEnum = {
    AppPricePoints: 'appPricePoints'
} as const;
export type AppPricePointTypeEnum = typeof AppPricePointTypeEnum[keyof typeof AppPricePointTypeEnum];


/**
 * Check if a given object implements the AppPricePoint interface.
 */
export function instanceOfAppPricePoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPricePointFromJSON(json: any): AppPricePoint {
    return AppPricePointFromJSONTyped(json, false);
}

export function AppPricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppPricePointV2AttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppPricePointRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppPricePointToJSON(value?: AppPricePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppPricePointV2AttributesToJSON(value.attributes),
        'relationships': AppPricePointRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

