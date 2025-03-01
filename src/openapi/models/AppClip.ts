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
import type { AppClipAttributes } from './AppClipAttributes';
import {
    AppClipAttributesFromJSON,
    AppClipAttributesFromJSONTyped,
    AppClipAttributesToJSON,
} from './AppClipAttributes';
import type { AppClipRelationships } from './AppClipRelationships';
import {
    AppClipRelationshipsFromJSON,
    AppClipRelationshipsFromJSONTyped,
    AppClipRelationshipsToJSON,
} from './AppClipRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClip
 */
export interface AppClip {
    /**
     * 
     * @type {string}
     * @memberof AppClip
     */
    type: AppClipTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClip
     */
    id: string;
    /**
     * 
     * @type {AppClipAttributes}
     * @memberof AppClip
     */
    attributes?: AppClipAttributes;
    /**
     * 
     * @type {AppClipRelationships}
     * @memberof AppClip
     */
    relationships?: AppClipRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClip
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipTypeEnum = {
    AppClips: 'appClips'
} as const;
export type AppClipTypeEnum = typeof AppClipTypeEnum[keyof typeof AppClipTypeEnum];


/**
 * Check if a given object implements the AppClip interface.
 */
export function instanceOfAppClip(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipFromJSON(json: any): AppClip {
    return AppClipFromJSONTyped(json, false);
}

export function AppClipFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClip {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppClipRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipToJSON(value?: AppClip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAttributesToJSON(value.attributes),
        'relationships': AppClipRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

