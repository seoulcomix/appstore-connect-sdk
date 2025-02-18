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
import type { AppCustomProductPageVersionAttributes } from './AppCustomProductPageVersionAttributes';
import {
    AppCustomProductPageVersionAttributesFromJSON,
    AppCustomProductPageVersionAttributesFromJSONTyped,
    AppCustomProductPageVersionAttributesToJSON,
} from './AppCustomProductPageVersionAttributes';
import type { AppCustomProductPageVersionRelationships } from './AppCustomProductPageVersionRelationships';
import {
    AppCustomProductPageVersionRelationshipsFromJSON,
    AppCustomProductPageVersionRelationshipsFromJSONTyped,
    AppCustomProductPageVersionRelationshipsToJSON,
} from './AppCustomProductPageVersionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersion
 */
export interface AppCustomProductPageVersion {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersion
     */
    type: AppCustomProductPageVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageVersion
     */
    id: string;
    /**
     * 
     * @type {AppCustomProductPageVersionAttributes}
     * @memberof AppCustomProductPageVersion
     */
    attributes?: AppCustomProductPageVersionAttributes;
    /**
     * 
     * @type {AppCustomProductPageVersionRelationships}
     * @memberof AppCustomProductPageVersion
     */
    relationships?: AppCustomProductPageVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppCustomProductPageVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppCustomProductPageVersionTypeEnum = {
    AppCustomProductPageVersions: 'appCustomProductPageVersions'
} as const;
export type AppCustomProductPageVersionTypeEnum = typeof AppCustomProductPageVersionTypeEnum[keyof typeof AppCustomProductPageVersionTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageVersion interface.
 */
export function instanceOfAppCustomProductPageVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppCustomProductPageVersionFromJSON(json: any): AppCustomProductPageVersion {
    return AppCustomProductPageVersionFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppCustomProductPageVersionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppCustomProductPageVersionRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageVersionToJSON(value?: AppCustomProductPageVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppCustomProductPageVersionAttributesToJSON(value.attributes),
        'relationships': AppCustomProductPageVersionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

