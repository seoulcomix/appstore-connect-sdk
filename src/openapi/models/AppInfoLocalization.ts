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
import type { AppInfoLocalizationAttributes } from './AppInfoLocalizationAttributes';
import {
    AppInfoLocalizationAttributesFromJSON,
    AppInfoLocalizationAttributesFromJSONTyped,
    AppInfoLocalizationAttributesToJSON,
} from './AppInfoLocalizationAttributes';
import type { AppInfoLocalizationRelationships } from './AppInfoLocalizationRelationships';
import {
    AppInfoLocalizationRelationshipsFromJSON,
    AppInfoLocalizationRelationshipsFromJSONTyped,
    AppInfoLocalizationRelationshipsToJSON,
} from './AppInfoLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppInfoLocalization
 */
export interface AppInfoLocalization {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalization
     */
    type: AppInfoLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalization
     */
    id: string;
    /**
     * 
     * @type {AppInfoLocalizationAttributes}
     * @memberof AppInfoLocalization
     */
    attributes?: AppInfoLocalizationAttributes;
    /**
     * 
     * @type {AppInfoLocalizationRelationships}
     * @memberof AppInfoLocalization
     */
    relationships?: AppInfoLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppInfoLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppInfoLocalizationTypeEnum = {
    AppInfoLocalizations: 'appInfoLocalizations'
} as const;
export type AppInfoLocalizationTypeEnum = typeof AppInfoLocalizationTypeEnum[keyof typeof AppInfoLocalizationTypeEnum];


/**
 * Check if a given object implements the AppInfoLocalization interface.
 */
export function instanceOfAppInfoLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppInfoLocalizationFromJSON(json: any): AppInfoLocalization {
    return AppInfoLocalizationFromJSONTyped(json, false);
}

export function AppInfoLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppInfoLocalizationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppInfoLocalizationRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppInfoLocalizationToJSON(value?: AppInfoLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppInfoLocalizationAttributesToJSON(value.attributes),
        'relationships': AppInfoLocalizationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

